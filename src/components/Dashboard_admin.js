import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import data from '../assets/Data.json';
import calendar from '../assets/img/calendar.png';
import path from '../assets/img/Path.png';
import icon from '../assets/img/Icon.svg';
import icon3 from '../assets/img/Icon3.svg';
import icon2 from '../assets/img/Icon2.svg';
import ChartFilter from './ChartFilter';
import DateRangePicker from './DateRangePicker';

const Dashboard_admin = () => {
  const [filters, setFilters] = useState({
    daily: true,
    weekly: false,
    monthly: false,
    yearly: false,
    dateRange: {
      startDate: new Date(),
      endDate: new Date()
    }
  });
  const [filteredData, setFilteredData] = useState(data);
  const [description, setDescription] = useState('');

  useEffect(() => {
    updateDescription();
  }, [filters, filteredData]);
  

  const handleDateRangeChange = ({ startDate, endDate }) => {
    if (!startDate || !endDate) return;

    const filtered = data.filter(item => {
      const registrationDate = new Date(item.registration_date);
      const certificationDate = new Date(item.certification_date);
      return registrationDate >= startDate && registrationDate <= endDate && (item.certification_status === 'CERTIFIED' ? certificationDate >= startDate && certificationDate <= endDate : true);
    });
    setFilteredData(filtered);
  };

  const handleSettingsChange = (newFilters) => {
    console.log('Filters before update:', filters);
    console.log('New Filters:', newFilters);
    setFilters(newFilters);
  };
  

  const getPreviousPeriodData = (startDate, endDate) => {
    console.log('Calculating previous period data...');
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  
    let previousPeriodStartDate = new Date(startDate);
    let previousPeriodEndDate = new Date(endDate);
  
    switch (true) {
      case filters.daily:
        previousPeriodStartDate.setDate(startDate.getDate() - 1);
        previousPeriodEndDate.setDate(endDate.getDate() - 1);
        break;
      case filters.weekly:
        previousPeriodStartDate.setDate(startDate.getDate() - 7);
        previousPeriodEndDate.setDate(endDate.getDate() - 7);
        break;
      case filters.monthly:
        previousPeriodStartDate.setMonth(startDate.getMonth() - 1);
        previousPeriodEndDate.setMonth(endDate.getMonth() - 1);
        break;
      case filters.yearly:
        previousPeriodStartDate.setFullYear(startDate.getFullYear() - 1);
        previousPeriodEndDate.setFullYear(endDate.getFullYear() - 1);
        break;
      default:
        return [];
    }
  
    console.log('Previous Period Start Date:', previousPeriodStartDate);
    console.log('Previous Period End Date:', previousPeriodEndDate);
  
    return data.filter(item => {
      const registrationDate = new Date(item.registration_date);
      return registrationDate >= previousPeriodStartDate && registrationDate <= previousPeriodEndDate;
    });
  };
  
  const updateDescription = () => {
    if (filters.dateRange && filters.dateRange.startDate && filters.dateRange.endDate) {
      const { startDate, endDate } = filters.dateRange;
      const previousPeriodData = getPreviousPeriodData(startDate, endDate);
  
      console.log('Filtered Data Length:', filteredData.length);
      console.log('Previous Period Data Length:', previousPeriodData.length);
  
      const calculatePercentageChange = (current, previous) => {
        if (previous === 0) return current > 0 ? 100 : 0;
        return ((current - previous) / previous) * 100;
      };
  
      let percentageChange = 0;
      let descriptionText = '';
  
      if (filters.daily) {
        percentageChange = calculatePercentageChange(filteredData.length, previousPeriodData.length);
        descriptionText = `${percentageChange.toFixed(1)}% ${percentageChange >= 0 ? 'up' : 'down'} from yesterday`;
      } else if (filters.weekly) {
        percentageChange = calculatePercentageChange(filteredData.length, previousPeriodData.length);
        descriptionText = `${percentageChange.toFixed(1)}% ${percentageChange >= 0 ? 'up' : 'down'} from last week`;
      } else if (filters.monthly) {
        percentageChange = calculatePercentageChange(filteredData.length, previousPeriodData.length);
        descriptionText = `${percentageChange.toFixed(1)}% ${percentageChange >= 0 ? 'up' : 'down'} from last month`;
      } else if (filters.yearly) {
        percentageChange = calculatePercentageChange(filteredData.length, previousPeriodData.length);
        descriptionText = `${percentageChange.toFixed(1)}% ${percentageChange >= 0 ? 'up' : 'down'} from last year`;
      }
  
      console.log('Description Text:', descriptionText);
  
      setDescription(descriptionText);
    }
  };

  const countStudents = (data) => {
    const uniqueStudentIds = new Set(data.map(item => item.student_id));
    return uniqueStudentIds.size;
  };

  const countCertifiedStudents = (data) => {
    const uniqueCertifiedStudents = new Set(
      data
        .filter(item => item.certification_status === 'CERTIFIED')
        .map(item => item.student_id)
    );
    return uniqueCertifiedStudents.size;
  };

  const calculateAverageCertificationScore = (data) => {
    const studentScores = new Map();
    data.forEach(item => {
      if (item.student_id && item.certification_score != null) {
        if (!studentScores.has(item.student_id)) {
          studentScores.set(item.student_id, []);
        }
        studentScores.get(item.student_id).push(item.certification_score);
      }
    });

    let totalScore = 0;
    let count = 0;

    studentScores.forEach(scores => {
      const studentAverage = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      totalScore += studentAverage;
      count++;
    });

    return count === 0 ? 0 : (totalScore / count).toFixed(2);
  };

  const totalStudents = countStudents(filteredData);
  const totalCertifiedStudents = countCertifiedStudents(filteredData);
  const averageCertificationScore = calculateAverageCertificationScore(filteredData);

  return (
    <div className="flex flex-col max-w-full mb-[50px] z-50">
      <div className="p-0">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <button className="flex items-center bg-white border border-[#D0D5DD] text-[12px] md:text-[14px] py-1 md:py-2 font-sans px-2 md:px-3 rounded-md text-[#64748B] ">
              <img src={calendar} alt="calendar" className="w-3 h-3 mr-2" />
              <DateRangePicker onDateRangeChange={handleDateRangeChange} />
            </button>
            <ChartFilter onSettingsChange={handleSettingsChange} />
          </div>               
        </div>
      </div>

      <div className="py-3 md:py-8">
        <div className="md:flex md:flex-col md:justify-between">
          <div className="md:flex md:justify-between">
            <div className="flex items-start bg-white justify-between gap-3 p-3 md:p-5 rounded-md md:rounded-[2px] my-3 md:my-0">
              <div className='flex flex-col w-full font-sans justify-between gap-2'>
                <div className='flex font-sans justify-between gap-2'>
                  <div className='flex flex-col justify-between gap-2'>
                    <span className="text-[#202224] text-[16px] md:text-[13px] lg:text-[16px] text-med">
                      Total Students
                    </span>
                    <span className="text-[#202224] text-[25px] md:text-[20px] lg:text-[25px] font-bold">
                      {totalStudents}
                    </span>
                  </div>
                  <img src={icon} alt="icon" className="w-[40px] h-[40px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]" />
                </div>
                <div className="flex items-center">
                  <img src={path} alt="path" className="w-4 md:w-2 lg:w-4 h-full mr-2" />
                  <span className="text-[#00B69B] text-[16px] md:text-[13px] lg:text-[16px] mr-1">
                    {description}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start bg-white justify-between gap-3 p-3 md:p-5 rounded-md md:rounded-[2px] my-3 md:my-0">
              <div className='flex flex-col w-full font-sans justify-between gap-2'>
                <div className='flex font-sans justify-between gap-2'>
                  <div className='flex flex-col justify-between gap-2'>
                    <span className="text-[#202224] text-[16px] md:text-[13px] lg:text-[16px] text-med">
                      Total Certified Students
                    </span>
                    <span className="text-[#202224] text-[25px] md:text-[20px] lg:text-[25px] font-bold">
                      {totalCertifiedStudents}
                    </span>
                  </div>
                  <img src={icon3} alt="icon3" className="w-[40px] h-[40px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]" />
                </div>
                <div className="flex items-center">
                  <img src={path} alt="path" className="w-4 md:w-2 lg:w-4 h-full mr-2" />
                  <span className="text-[#00B69B] text-[16px] md:text-[13px] lg:text-[16px] mr-1">
                    {description}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start bg-white justify-between gap-3 p-3 md:p-5 rounded-md md:rounded-[2px] my-3 md:my-0">
              <div className='flex flex-col w-full font-sans justify-between gap-2'>
                <div className='flex font-sans justify-between gap-2'>
                  <div className='flex flex-col justify-between gap-2'>
                    <span className="text-[#202224] text-[16px] md:text-[13px] lg:text-[16px] text-med">
                      Average Certification Score
                    </span>
                    <span className="text-[#202224] text-[25px] md:text-[20px] lg:text-[25px] font-bold">
                      {averageCertificationScore}
                    </span>
                  </div>
                  <img src={icon2} alt="icon2" className="w-[40px] h-[40px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]" />
                </div>
                <div className="flex items-center">
                  <img src={path} alt="path" className="w-4 md:w-2 lg:w-4 h-full mr-2" />
                  <span className="text-[#00B69B] text-[16px] md:text-[13px] lg:text-[16px] mr-1">
                    {description}
                  </span>
                </div>
              </div>
            </div>
          </div>                
        </div>
      </div>

      <div className="bg-white justify-between gap-3 border border-[#E2E8F0] rounded-[2px] p-0">
        <div className='flex flex-col font-sans justify-between gap-2 p-6'>
          <span className="text-[#202224] text-[18px] sm:text-[22px] text-med mb-3 md:mb-6">Student</span>
          <div className="relative h-48 sm:h-[200%]">
            <Chart data={filteredData} /> 
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard_admin;
