import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark, faHouse } from '@fortawesome/free-solid-svg-icons';
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
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>
                    <NavLink to="/values" className={({ isActive }) => isActive ? "active" : ""}>values</NavLink>
                    <NavLink to="/membership" className={({ isActive }) => isActive ? "active" : ""}>membership</NavLink>
                    <NavLink to="/practice" className={({ isActive }) => isActive ? "active" : ""}>practice</NavLink>
                    <NavLink to="/trips" className={({ isActive }) => isActive ? "active" : ""}>trips</NavLink>
                    <NavLink to="/comp-team" className={({ isActive }) => isActive ? "active" : ""}>comp team</NavLink>
                    <NavLink to="/resources" className={({ isActive }) => isActive ? "active" : ""}>resources</NavLink>
                </nav>

                <div className="socials">
                    <a href="https://www.instagram.com/trojanclimbing/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://scclimbingclub.slack.com/join/shared_invite/zt-2ufleb601-i6GfJqTQ0vcd1A8UPfRvsA#/shared-invite/email" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSlack} />
                    </a>
                </div>
            </header>

            {/* Mobile slide-out menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="close-btn" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <nav className="mobile-nav">
                    <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
                        home
                    </NavLink>
                    <NavLink to="/values" onClick={() => setIsMenuOpen(false)}>values</NavLink>
                    <NavLink to="/membership" onClick={() => setIsMenuOpen(false)}>membership</NavLink>
                    <NavLink to="/practice" onClick={() => setIsMenuOpen(false)}>practice</NavLink>
                    <NavLink to="/trips" onClick={() => setIsMenuOpen(false)}>trips</NavLink>
                    <NavLink to="/comp-team" onClick={() => setIsMenuOpen(false)}>comp team</NavLink>
                    <NavLink to="/resources" onClick={() => setIsMenuOpen(false)}>resources</NavLink>
                </nav>
            </div>

        </>
    );
};

export default Header;