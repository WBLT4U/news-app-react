// src/components/Navbar.js

import React, { useState } from 'react';
import './navbar.css'; // We'll create this CSS file next

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">MyWebsite</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Nav;