import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure you have a CSS file for styles

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <button className="menu-icon" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </button>
            <ul className={`navMenu ${isOpen ? 'showMenu' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/aboutus" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
                <li><Link to="/pagination" onClick={toggleMenu}>News</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;