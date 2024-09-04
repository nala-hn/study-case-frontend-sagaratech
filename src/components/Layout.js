import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="lg:flex">
        <div className="w-[280px]">
            <Sidebar />
        </div>

        <div className="flex flex-col bg-gray-100 w-full lg:max-w-[calc(100%-280px)] overflow-hidden h-full z-10">
            <Header />
            <main className="flex flex-col max-w-full h-screen lg:h-full mt-[80px] md:mt-[100px] mx-[32px] z-10">
                <Outlet />
            </main>
        </div>
    </div>
  );
};

export default Layout;
