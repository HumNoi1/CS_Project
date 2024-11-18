'use client';

import React from 'react';
import { FileText } from 'lucide-react';

const PDFRow = () => {
  const pdfs = [
    { id: 1, name: 'subject 1' },
    { id: 2, name: 'subject 2' },
    { id: 3, name: 'subject 3' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="p-6">
        {/* Header with back button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-xl">65020979</h1>
          <button className="text-white hover:bg-slate-700 p-2 rounded-full transition-colors">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        </div>

        {/* PDF Files Row */}
        <div className="flex space-x-16 overflow-x-auto pb-4">
          {pdfs.map((pdf) => (
            <div 
              key={pdf.id} 
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="mb-2 cursor-pointer group">
                <div className="w-16 h-20 bg-red-500 rounded-sm relative flex items-center justify-center group-hover:bg-red-400 transition-colors">
                  <span className="text-white font-medium text-sm">PDF</span>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-red-400 group-hover:bg-red-300"></div>
                </div>
              </div>
              <span className="text-white text-sm">{pdf.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDFRow;