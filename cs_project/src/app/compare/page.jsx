'use client';

import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";

const CompareView = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <h1 className="text-white text-xl mb-8">compare</h1>

      {/* PDF Icons Container */}
      <div className="flex justify-between mb-6 px-16">
        {/* Teacher PDF */}
        <div className="flex flex-col items-center">
          <div className="mb-2 cursor-pointer group">
            <div>
              <FaRegFilePdf className="text-red-500 w-16 h-20"/>
            </div>
          </div>
          <span className="text-white text-sm">Teacher</span>
        </div>

        {/* Student PDF */}
        <div className="flex flex-col items-center">
          <div className="mb-2 cursor-pointer group">
            <div>
              <FaRegFilePdf className="text-red-500 w-16 h-20" />
            </div>
          </div>
          <span className="text-white text-sm">Student</span>
        </div>
      </div>

      {/* Details Card */}
      <div className="bg-slate-200 rounded-lg p-6 mx-auto max-w-2xl">
        <div className="space-y-6">
          {/* Student Score */}
          <div>
            <p className="text-slate-800">คะแนนของนิสิต 6/10</p>
            <ul className="ml-6 mt-2 space-y-1 text-slate-700">
              <li>- ตอบคำถามทั่วไปอย่างถูกต้อง</li>
              <li>- ไม่ได้พูดถึงประเด็นที่ 2 (ความยืดหยุ่น)</li>
              <li>ของการออกแบบที่ได้รับการพัฒนาขึ้นตามข้อกำหนด</li>
            </ul>
          </div>

          {/* Teacher Score */}
          <div>
            <p className="text-slate-800">คะแนนของอาจารย์ 8/10</p>
            <ul className="ml-6 mt-2 space-y-1 text-slate-700">
              <li>- ตอบคำถามทั้งสองประการทั่วไปอย่างถูกต้อง</li>
              <li>- นำเสนอเหตุผลและอธิบายได้ชัดเจน</li>
              <li>- คิดเกี่ยวกับวัตถุประสงค์ของการใช้งาน</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareView;