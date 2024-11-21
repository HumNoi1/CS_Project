# api/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class CompareRequest(BaseModel):
    teacher_text: str
    student_text: str

@app.post("/compare")
async def compare_texts(request: CompareRequest):
    try:
        # LM Studio endpoint configuration
        LM_STUDIO_URL = "http://localhost:1234/v1/chat/completions"
        
        prompt = f"""
        Compare these two answers:
        Teacher's answer: {request.teacher_text}
        Student's answer: {request.student_text}
        
        Analyze and provide:
        1. Student's score out of 10
        2. Feedback in Thai
        3. Key differences
        
        Response format:
        {{
            "studentScore": number,
            "studentFeedback": string[],
            "differences": string[]
        }}
        """

        response = requests.post(
            LM_STUDIO_URL,
            json={
                "messages": [
                    {"role": "system", "content": "You are a Thai teaching assistant"},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.7
            }
        )
        
        return response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))