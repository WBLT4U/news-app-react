import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure you have a CSS file for styles

function Nav() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav id="navigation">
            <div className="container">
                <div className="header-ctn">
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i> {/* Add an icon or text for the toggle */}
                    </div>
                </div>
                <div id="responsive-nav" className={isActive ? 'active' : ''}>
                    <ul className="main-nav nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/pagination">News</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;