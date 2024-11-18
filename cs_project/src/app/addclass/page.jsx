'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AddClassForm = () => {
  const [formData, setFormData] = useState({
    className: '',
    term: '',
    subjectLessons: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-lg mx-auto bg-slate-800 rounded-lg shadow-xl text-white">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Add new class</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <input 
                type="text"
                name="className"
                value={formData.className}
                onChange={handleChange}
                placeholder="Enter class name"
                className="w-full px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium">Term</label>
              <input 
                type="text"
                name="term"
                value={formData.term}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium">Subject lessons</label>
              <input 
                type="text"
                name="subjectLessons"
                value={formData.subjectLessons}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-center">
              <Link href='/folder'>
                <button 
                  type="submit"
                  className="px-8 py-2 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  ADD
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClassForm;