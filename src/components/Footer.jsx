import './Footer.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import mountainRange from '../assets/mountain-range.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={mountainRange} className='mountain-range'/>
            <div className="footer-wrapper">
                <div className="footer-content">
                    {/* Left Panel */}
                    <div className="left-panel">
                        <div className="logo footer">
                            <img src={logo} alt="Club Logo" />
                        </div>

                        <div className="socials footer">
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
                    </div>
                    {/* Right Panel */}
                    <div className="right-panel">
                        <div className="right-content">
                            <div className="left-column">
                                <p>Other Links</p>
                                <a>
                                    Touchstone Climbing
                                </a>
                                <a>
                                    DEI and Resources Guide
                                </a>
                            </div>
                            <div className="right-column">
                                <p>Contact Us</p>
                                <div className="row">
                                    <FontAwesomeIcon icon={faInstagram} className="footer-insta" />
                                    <a>@trojanclimbing</a>
                                </div>
                                <div className="row">
                                    <FontAwesomeIcon icon={faEnvelope} className="footer-email" />
                                    <a>climb.usc@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="liner">
                    <div className="liner-content">
                        <p>© 2024 USC Climbing Team</p>
                        <p>Privacy Notice | Notice of Non-Discrimination | Digital Accessibility</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;