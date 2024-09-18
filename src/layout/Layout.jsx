/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../body/Footer';
import Navbar from '../header/Navbar';
import Sidebar from '../component/Sidebar';


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


