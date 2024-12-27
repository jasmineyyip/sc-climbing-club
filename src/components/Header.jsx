import './Header.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSlack } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Club Logo" />
            </div>

            <nav className="nav">
                <a href="#">Our Values</a>
                <a href="#">Practice</a>
                <a href="#">Trips</a>
                <a href="#">Comp Team</a>
                <a href="#">DEI & Resources</a>
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