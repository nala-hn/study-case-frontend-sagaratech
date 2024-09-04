import React, { useState, useRef, useEffect } from 'react';
import DownOutline from '../assets/img/DownOutline.png';

const ChartFilter = ({ onSettingsChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('daily');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleRadioChange = (e) => {
    const { value } = e.target;
    const newFilters = {
      daily: false,
      weekly: false,
      monthly: false,
      yearly: false,
    };
    newFilters[value] = true;
    setSelectedFilter(value);
    onSettingsChange(newFilters); 
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="flex items-center bg-white border border-[#D0D5DD] text-[12px] md:text-[14px] py-1 md:py-2 font-sans px-2 md:px-3 rounded-md text-[#64748B] ">
        <span>{selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}</span>
        <img src={DownOutline} alt="filter icon" className="w-3 h-3 ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-4 z-10">
          <label className="block mb-2">
            <input
              type="radio"
              name="filter"
              value="daily"
              checked={selectedFilter === 'daily'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Daily
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="filter"
              value="weekly"
              checked={selectedFilter === 'weekly'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Weekly
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="filter"
              value="monthly"
              checked={selectedFilter === 'monthly'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Monthly
          </label>
          <label className="block">
            <input
              type="radio"
              name="filter"
              value="yearly"
              checked={selectedFilter === 'yearly'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            Yearly
          </label>
        </div>
      )}
    </div>
  );
};

export default ChartFilter;
