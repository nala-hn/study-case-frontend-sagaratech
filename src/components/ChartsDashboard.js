import React from 'react';
import Chart from '../components/Chart';
import data from '../assets/Data.json';
import calendar from '../assets/img/calendar.png';
import DownOutline from '../assets/img/DownOutline.png';
import path from '../assets/img/Path.png';
import icon from '../assets/img/Icon.svg';
import icon3 from '../assets/img/Icon3.svg';
import icon2 from '../assets/img/Icon2.svg';

function ChartDashboard() {
  return (
    <div className="flex flex-col w-full bg-gray-100 p-8 mt-[72px]">
    <main className="p-0">
      <div className="flex flex-col justify-between">
          <div className="flex justify-between">
              <a className="flex items-center bg-white border border-[#D0D5DD] text-[8px] md:text-[8px] xl:text-[14px] py-3 md:py-2 font-sans px-4 md:px-3 rounded-md text-[#64748B] ">
                <img src={calendar} alt="student" className="w-4 h-4 mr-2" />
                <span>Dec 29, 2023 - Jan 4, 2024 </span>
              </a>
              <a className="flex items-center bg-white border border-[#D0D5DD] text-[8px] md:text-[8px] xl:text-[14px] py-3 md:py-2 font-sans px-4 md:px-3 rounded-md text-[#64748B] ">
                <span>Daily</span>
                <img src={DownOutline} alt="student" className="w-4 h-4 mr-2" />
              </a>
          </div>               
      </div>
    </main>

    <main className="py-8">
      <div className="flex flex-col justify-between">
          <div className="flex justify-between">
              <div className="flex items-start bg-white justify-between gap-3 md:p-5 rounded-[2px]">
                <div className='flex flex-col font-sans justify-between gap-2'>
                  <span className="text-[#202224] text-[16px] text-med">
                    Total Students
                  </span>
                  <span className="text-[#202224] text-[25px] font-bold">
                    513
                  </span>
                  <div className="flex items-center">
                    <img src={path} alt="student" className="w-4 h-full mr-2" />
                    <span className="text-[#00B69B] text-[16px] mr-1">
                    8.5%
                    </span>
                    <span className="text-[#202224] text-[16px]">
                    Up from yesterday
                    </span>
                  </div>
                </div>
                <img src={icon} alt="student" className="w-[40px] h-[40px]" />
              </div>
              <div className="flex items-start bg-white justify-between gap-3 md:p-5 rounded-[2px]">
                <div className='flex flex-col font-sans justify-between gap-2'>
                  <span className="text-[#202224] text-[16px] text-med">
                  Total Certified Students 
                  </span>
                  <span className="text-[#202224] text-[25px] font-bold">
                    489
                  </span>
                  <div className="flex items-center">
                    <img src={path} alt="student" className="w-4 h-full mr-2" />
                    <span className="text-[#00B69B] text-[16px] mr-1">
                    8.5%
                    </span>
                    <span className="text-[#202224] text-[16px]">
                    Up from yesterday
                    </span>
                  </div>
                </div>
                <img src={icon3} alt="student" className="w-[40px] h-[40px]" />
              </div>
              <div className="flex items-start bg-white justify-between gap-3 md:p-5 rounded-[2px]">
                <div className='flex flex-col font-sans justify-between gap-2'>
                  <span className="text-[#202224] text-[16px] text-med">
                  Average Certification Score
                  </span>
                  <span className="text-[#202224] text-[25px] font-bold">
                    84,62
                  </span>
                  <div className="flex items-center">
                    <img src={path} alt="student" className="w-4 h-full mr-2" />
                    <span className="text-[#00B69B] text-[16px] mr-1">
                    8.5%
                    </span>
                    <span className="text-[#202224] text-[16px]">
                    Up from yesterday
                    </span>
                  </div>
                </div>
                <img src={icon2} alt="student" className="w-[40px] h-[40px]" />
              </div>
          </div>                
      </div>
    </main>

    <main className="bg-white justify-between gap-3 border border-[#E2E8F0] rounded-[2px] p-0">
      <div className='flex flex-col font-sans justify-between gap-2 p-6'>
        <span className="text-[#202224] text-[22px] text-med mb-6">Student</span>
        <Chart data={data} />
      </div>
    </main>
  </div>
  );
}

export default ChartDashboard;
