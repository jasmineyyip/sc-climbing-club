import './Header.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Club Logo" />
            </div>

            <nav className="nav">
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
                <a href="https://www.facebook.com/SC.Climbing.Team/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/trojanclimbing/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://scclimbingclub.slack.com/join/shared_invite/zt-2ufleb601-i6GfJqTQ0vcd1A8UPfRvsA#/shared-invite/email" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSlack} />
                </a>
            </div>
        </header>
    );
};

export default Header;