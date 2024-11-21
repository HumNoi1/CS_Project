// utils/pdfExtract.js
import * as pdfjs from 'pdfjs-dist';

export async function extractPDFText(url) {
  try {
    const pdf = await pdfjs.getDocument(url).promise;
    let text = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(' ');
    }

    return text;
  } catch (error) {
    console.error('PDF extraction error:', error);
    throw error;
  }
}
