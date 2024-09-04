import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import nav_logo from '../assets/img/nav_logo.png';
import dashboard from '../assets/img/grid-alt.png';
import student from '../assets/img/icons8_student.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const location = useLocation(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/admin/dashboard_admin') {
      setSelectedMenu('dashboard');
    } else if (currentPath === '/admin/student') {
      setSelectedMenu('student');
    } else {
      setSelectedMenu(null);
    }
  }, [location.pathname]);

  const handleClickOutside = (event) => {
    if (event.target.closest('.sidebar') === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const goToMenu = (menu, path) => {
    setSelectedMenu(menu);
    navigate(`/admin${path}`);
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-[20px] left-8 z-50 lg:hidden">
        <img src={nav_logo} alt="Logo" className="w-6 h-6 lg:w-10 lg:h-10 object-cover" />
      </button>
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] bg-[#1C1C1C] text-white flex flex-col px-6 pt-[42px] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 sidebar`}
      >
        <div className="flex mb-12">
          <img src={nav_logo} alt="Logo" className="w-6 h-6 lg:w-10 lg:h-10 object-cover" />
          <div className="ml-2">
            <h1 className="font-sans text-[12px] lg:text-lg font-bold -mt-[2px] lg:-mt-1">SAGARA</h1>
            <h1 className="font-sans text-[12px] lg:text-lg font-bold -mt-2">TECH</h1>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[15px]">
          <span className="text-[14px] text-[#9E9E9E] uppercase">menu</span>
          <button
            onClick={() => goToMenu('dashboard', '/dashboard_admin')}
            className={`flex items-center py-3 px-full rounded-md ${selectedMenu === 'dashboard' ? 'bg-[#A51535]' : 'bg-[#1C1C1C]'}`}>
            <img src={dashboard} alt="Dashboard" className="w-5 h-auto mx-3" />
            <span className="font-sans text-[14px]">Dashboard</span>
          </button>
          <button
            onClick={() => goToMenu('student', '/student')}
            className={`flex items-center py-3 px-full rounded-md ${selectedMenu === 'student' ? 'bg-[#A51535]' : 'bg-[#1C1C1C]'}`}>
            <img src={student} alt="Students" className="w-5 h-auto mx-3" />
            <span className="font-sans text-[14px]">Students</span>
          </button>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;
