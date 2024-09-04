import React, { useState, useRef, useEffect } from 'react';

const FilterComponent = ({ onInstanceChange, searchTermFilter, onSearchFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [instance, setInstance] = useState('');

  const instances = ['STMIK MARDIRA', 'WIDYATAMA', 'TELKOM', 'POLBAN', 'NOT LISTED'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInstanceChange = (e) => {
    const selectedInstance = e.target.value;
    setInstance(selectedInstance);
    onInstanceChange(selectedInstance);
  };

  const handleSearch = (event) => {
    onSearchFilter(event.target.value);
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
      <button className="dropdown-button text-gray-500" onClick={toggleDropdown}>
        Filters
      </button>
      {isOpen && (
        <div className="absolute -left-9 mt-4 w-48 bg-white border border-gray-300 rounded shadow-lg p-4 z-10">
          <select
            value={instance}
            onChange={handleInstanceChange}
            className="mb-2 p-2 border rounded w-full"
          >
            <option value="" disabled>Instance</option>
            {instances.map((inst, index) => (
              <option key={index} value={inst}>
                {inst}
              </option>
            ))}
          </select>

          <div className="w-full border border-grey-400 rounded bg-[#ebebeb] text-[#c8c4c4] text-left pl-3 mb-2">is</div>

          <input
            type="text"
            value={searchTermFilter}
            onChange={handleSearch}
            placeholder="Search..."
            className="search-input border border-grey-400 rounded w-full placeholder-[#c8c4c4] pl-2"
          />
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
