import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i);

const DateRangePicker = ({ onDateRangeChange }) => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(dateRange[0].getMonth());
  const [selectedYear, setSelectedYear] = useState(dateRange[0].getFullYear());
  const [clickedDate, setClickedDate] = useState(null);
  const calendarRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCalendarOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateRangeChange = (dates) => {
    const [start, end] = dates;
    setDateRange([start, end]);
    onDateRangeChange({ startDate: start, endDate: end });
  };

  const handleMonthChange = (e) => {
    const newMonth = months.indexOf(e.target.value);
    const newStartDate = new Date(dateRange[0]);
    newStartDate.setMonth(newMonth);
    const newEndDate = new Date(dateRange[1]);
    newEndDate.setMonth(newMonth);
    setDateRange([newStartDate, newEndDate]);
    setSelectedMonth(newMonth);
    handleDateRangeChange([newStartDate, newEndDate]);
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10);
    const newStartDate = new Date(dateRange[0]);
    newStartDate.setFullYear(newYear);
    const newEndDate = new Date(dateRange[1]);
    newEndDate.setFullYear(newYear);
    setDateRange([newStartDate, newEndDate]);
    setSelectedYear(newYear);
    handleDateRangeChange([newStartDate, newEndDate]);
  };

  const toggleCalendar = () => {
    setCalendarOpen(prev => !prev);
  };

  const handleDateClick = (date) => {
    if (clickedDate && clickedDate.toDateString() === date.toDateString()) {
      setCalendarOpen(false);
    } else {
      setClickedDate(date);
    }
  };

  return (
    <div className="relative flex flex-col">
      <button
        onClick={toggleCalendar}
        className="border p-0 border-none text-left"
      >
        {dateRange[0] ? `${dateRange[0].toDateString()} - ${dateRange[1]?.toDateString()}` : 'Select date range'}
      </button>
      {calendarOpen && (
        <div ref={calendarRef} className="absolute top-full -left-[34px] mt-2 px-5 py-2 z-10 bg-white border border-gray-300 shadow-md rounded-md">
          <div className="flex gap-2 mb-2">
            <select value={months[selectedMonth]} onChange={handleMonthChange} className="border p-2 rounded-md">
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select value={selectedYear} onChange={handleYearChange} className="border p-2 rounded-md">
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <DatePicker
            selected={dateRange[0]}
            onChange={(dates) => {
              handleDateRangeChange(dates);
              setTimeout(() => setCalendarOpen(false), 300);
            }}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            selectsRange
            inline
            dateFormat="MMMM d, yyyy"
            className="border p-2 rounded-md"
            onDayClick={handleDateClick}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
