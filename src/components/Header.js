import React from 'react';
import header from '../assets/img/header.png';
import Logout from './Logout';

function Header() {
  return (
    <header className="bg-white fixed h-[60px] md:h-[72px] w-full lg:max-w-[calc(100%-280px)] overflow-hidden z-20">
      <div className="flex h-full items-center justify-end px-4 md:px-8">
        <div className='flex flex-col text-right mr-3'>
          <h1 className="text-sm md:text-[14px] text-med">Thomas Anree</h1>
          <h1 className="text-sm md:text-[12px] -mt-1 md:-mt-2">Admin</h1>
        </div>
        <div className='flex items-center'>
          <img src={header} alt="profile" className="w-8 h-8 mr-2" />
          <Logout />
        </div>
      </div>
    </header>
  );
}

export default Header;
