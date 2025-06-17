import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo-notext.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark, faHouse, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

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

                    <div className="dropdown" onMouseEnter={() => handleDropdown('about')} onMouseLeave={() => handleDropdown(null)}>
                        <span className="dropdown-title">
                            About
                            <span className="dropdown-caret"><FontAwesomeIcon icon={faCaretDown} /></span>
                        </span>
                        {openDropdown === 'about' && (
                            <div className="dropdown-content">
                                <NavLink to="/values">Values</NavLink>
                                <NavLink to="/membership">Membership</NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/practice" className={({ isActive }) => isActive ? "active" : ""}>Practice</NavLink>
                    <NavLink to="/trips" className={({ isActive }) => isActive ? "active" : ""}>Trips</NavLink>
                    <NavLink to="/comp-team" className={({ isActive }) => isActive ? "active" : ""}>Comp Team</NavLink>

                    <div className="dropdown" onMouseEnter={() => handleDropdown('resources')} onMouseLeave={() => handleDropdown(null)}>
                        <span className="dropdown-title">
                            Resources 
                            <span className="dropdown-caret"><FontAwesomeIcon icon={faCaretDown} /></span>
                        </span>
                        {openDropdown === 'resources' && (
                            <div className="dropdown-content">
                                <NavLink to="/resources">Guides</NavLink>
                                <NavLink to="/faq">FAQ</NavLink>
                            </div>
                        )}
                    </div>
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
