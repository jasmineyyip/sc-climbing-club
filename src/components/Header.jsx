import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo-notext.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Club Logo" />
                </div>

                <div className="hamburger" onClick={() => setIsMenuOpen(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <nav className="nav desktop-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/values" className={({ isActive }) => isActive ? "active" : ""}>Values</NavLink>
                    <NavLink to="/membership" className={({ isActive }) => isActive ? "active" : ""}>Membership</NavLink>
                    <NavLink to="/practice" className={({ isActive }) => isActive ? "active" : ""}>Practice</NavLink>
                    <NavLink to="/trips" className={({ isActive }) => isActive ? "active" : ""}>Trips</NavLink>
                    <NavLink to="/comp-team" className={({ isActive }) => isActive ? "active" : ""}>Comp Team</NavLink>
                    <NavLink to="/resources" className={({ isActive }) => isActive ? "active" : ""}>Guides</NavLink>
                    <NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>FAQ</NavLink>
                </nav>
            </header>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="close-btn" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <nav className="mobile-nav">
                    <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/values" onClick={() => setIsMenuOpen(false)}>Values</NavLink>
                    <NavLink to="/membership" onClick={() => setIsMenuOpen(false)}>Membership</NavLink>
                    <NavLink to="/practice" onClick={() => setIsMenuOpen(false)}>Practice</NavLink>
                    <NavLink to="/trips" onClick={() => setIsMenuOpen(false)}>Trips</NavLink>
                    <NavLink to="/comp-team" onClick={() => setIsMenuOpen(false)}>Comp Team</NavLink>
                    <NavLink to="/resources" onClick={() => setIsMenuOpen(false)}>Guides</NavLink>
                    <NavLink to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
                </nav>
            </div>
        </>
    );
};

export default Header;
