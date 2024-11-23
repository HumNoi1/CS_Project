import os
from typing import List
from supabase import create_client, Client
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import SupabaseVectorStore
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.document_loaders import TextLoader, PDFLoader
import tempfile
import requests

class RAGPipeline:
    def __init__(self):
        # Initialize Supabase client
        supabase_url = os.getenv("SUPABASE_URL")
        supabase_key = os.getenv("SUPABASE_SERVICE_KEY")
        self.supabase: Client = create_client(supabase_url, supabase_key)
        
        # Initialize OpenAI
        self.embeddings = OpenAIEmbeddings()
        self.llm = ChatOpenAI(
            temperature=0,
            model="gpt-3.5-turbo-16k"
        )
        
        # Initialize text splitter
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len
        )
        
        # Initialize vector store
        self.vector_store = SupabaseVectorStore(
            client=self.supabase,
            embedding=self.embeddings,
            table_name="document_embeddings",
            query_name="match_documents"
        )
        
        # Initialize retrieval chain
        self.qa_chain = ConversationalRetrievalChain.from_llm(
            llm=self.llm,
            retriever=self.vector_store.as_retriever(
                search_kwargs={"k": 5}
            ),
            return_source_documents=True
        )
        
        self.chat_history = []

    async def process_file(self, file_id: int, class_id: int):
        """Process and embed a file from Supabase storage"""
        try:
            # Get file metadata from database
            file_data = await self.supabase.table('class_files') \
                .select('*') \
                .eq('id', file_id) \
                .single() \
                .execute()
            
            file_info = file_data.data
            
            # Download file from Supabase storage
            file_url = file_info['url']
            response = requests.get(file_url)
            
            # Create temporary file
            with tempfile.NamedTemporaryFile(delete=False) as temp_file:
                temp_file.write(response.content)
                temp_path = temp_file.name
            
            # Load document based on file type
            if file_info['file_type'] == 'application/pdf':
                loader = PDFLoader(temp_path)
            else:
                loader = TextLoader(temp_path)
                
            documents = loader.load()
            
            # Split documents
            splits = self.text_splitter.split_documents(documents)
            
            # Add metadata
            for split in splits:
                split.metadata.update({
                    'file_id': file_id,
                    'class_id': class_id,
                    'file_name': file_info['file_name']
                })
            
            # Add to vector store
            await self.vector_store.aadd_documents(splits)
            
            # Clean up temp file
            os.unlink(temp_path)
            
            return {"status": "success", "message": f"Processed {len(splits)} chunks"}
            
        except Exception as e:
            return {"status": "error", "message": str(e)}

    async def query_documents(self, query: str, class_id: int):
        """Query documents using RAG"""
        try:
            # Add class_id filter to retriever
            filter_dict = {"metadata": {"class_id": class_id}}
            
            # Get response from QA chain
            response = await self.qa_chain.acall({
                "question": query,
                "chat_history": self.chat_history
            })
            
            # Update chat history
            self.chat_history.append((query, response['answer']))
            
            # Extract source documents
            sources = []
            for doc in response['source_documents']:
                sources.append({
                    'content': doc.page_content,
                    'file_name': doc.metadata['file_name'],
                    'file_id': doc.metadata['file_id']
                })
            
            return {
                "status": "success",
                "answer": response['answer'],
                "sources": sources
            }
            
        except Exception as e:
            return {"status": "error", "message": str(e)}

    def clear_chat_history(self):
        """Clear the conversation history"""
        self.chat_history = []

# API Routes handler
async def handle_process_file(file_id: int, class_id: int):
    rag = RAGPipeline()
    return await rag.process_file(file_id, class_id)

async def handle_query(query: str, class_id: int):
    rag = RAGPipeline()
    return await rag.query_documents(query, class_id)

# Example usage
if __name__ == "__main__":
    import asyncio
    
    async def main():
        # Example file processing
        result = await handle_process_file(
            file_id=123,  # Replace with actual file ID
            class_id=456  # Replace with actual class ID
        )
        print("File processing result:", result)
        
        # Example query
        result = await handle_query(
            query="What are the main points discussed in the documents?",
            class_id=456  # Replace with actual class ID
        )
        print("Query result:", result)
    
    asyncio.run(main())