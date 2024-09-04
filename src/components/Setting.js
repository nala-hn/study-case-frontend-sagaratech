import React, { useState, useRef, useEffect } from 'react';
import setting from '../assets/img/setting.png';

const Setting = ({ onSettingsChange }) => {
  const [filters, setFilters] = useState({
    name: true, 
    email: true, 
    phone_number: true, 
    instance: true, 
    registration_date: true, 
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const newFilters = { ...filters, [name]: checked };
    setFilters(newFilters);
    onSettingsChange(newFilters);
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
      <button onClick={toggleDropdown} className="flex items-center bg-white border border-[#D0D5DD] rounded-md p-3 md:p-2 lg:p-3">
        <img src={setting} alt="student" className="w-3 md:w-4 lg:w-6 h-auto" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-4 z-10">
          <label className="block mb-2">
            <input
              type="checkbox"
              name="name"
              checked={filters.name}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Name
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="email"
              checked={filters.email}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Email Address
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="phone_number"
              checked={filters.phone_number}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Phone Number
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="instance"
              checked={filters.instance}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Instance
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="registration_date"
              checked={filters.registration_date}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Registration Date
          </label>
        </div>
      )}
    </div>
  );
};

export default Setting;
