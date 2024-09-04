import React, { useState, useEffect, useRef } from 'react';
import DownOutline from '../assets/img/DownOutline.png';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-100" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <img src={DownOutline} alt="downoutline" className="w-4 h-4 mr-2" />
      </button>

      {isOpen && (
        <div className="absolute right-2 -mt-2 w-35 bg-white border rounded-md shadow-lg z-20">
          <button
            onClick={handleLogout}
            className="block w-full text-center px-4 py-1 text-gray-700 hover:bg-[#A51535] hover:text-white rounded-md z-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
