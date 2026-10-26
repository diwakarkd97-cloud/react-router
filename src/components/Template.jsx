import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet

const Template = () => {
  return (   
     <>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
       </nav>
       
       {/* Outlet renders whatever child route is currently active */}
       <main>
         <Outlet /> 
       </main>
    </>
  );
};

export default Template;