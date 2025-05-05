import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

// import images directly
// overview
import practiceImg from '../assets/home/overview/practice.png';
import tripsImg from '../assets/home/overview/trips.png';
import compImg from '../assets/home/overview/comp.png';
import socialImg from '../assets/home/overview/social.png';
import gearImg from '../assets/home/overview/gear.png';
// footprints
import leftFootprint from '../assets/home/graphics/footprint-yellow.png'
import rightFootprint from '../assets/home/graphics/footprint-red.png'
// fireworks
import leftFirework from '../assets/home/graphics/left-firework.png'
import rightFirework from '../assets/home/graphics/right-firework.png'
// confetti
import confettiLeft from '../assets/home/graphics/confetti-left.png'
import confettiRight from '../assets/home/graphics/confetti-right.png'
// sponsors
import brightstone from '../assets/home/sponsors/brightstone.png';
import cotopaxi from '../assets/home/sponsors/cotopaxi.png';
import evolv from '../assets/home/sponsors/evolv.png';
import hitorii from '../assets/home/sponsors/hitorii.png';
import stronghold from '../assets/home/sponsors/stronghold.png';
import touchstone from '../assets/home/sponsors/touchstone.png';

import Map from '../components/Map'

// typewriter
const teamNames = ['Trojans.', 'Beginners.', 'Comp Climbers.', 'Women.', 'Queer Climbers.', 'BIPOC Climbers.', 'International Students.', 'Everyone.'];
const typingSpeed = 120;
const deletingSpeed = 40;
const pauseTime = 2000;

const overviewItems = [
    { img: practiceImg, text: 'Practices twice a week' },
    { img: tripsImg, text: 'Free outdoor trips every weekend' },
    { img: compImg, text: 'Compete in collegiate' },
    { img: socialImg, text: 'Social events' },
    { img: gearImg, text: 'Gear discounts & Club merch' },
];

const sponsorItems = [
    { logo: cotopaxi, url: "https://www.cotopaxi.com" },
    { logo: evolv, url: "https://www.evolvsports.com/en-us" },
    { logo: brightstone, url: "https://brightstoneclimbing.com/" },
    { logo: hitorii, url: "https://hitorii.com/" },
    { logo: stronghold, url: "https://strongholdclimb.com/" },
    { logo: touchstone, url: "https://touchstoneclimbing.com/" }
  ];

const HomePage = () => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); // typewriter
    const [hoveredIndex, setHoveredIndex] = useState(null); // sponsorship hover effect
    const videoRef = useRef(null);
    const navigate = useNavigate();

    // auto typer
    useEffect(() => {
        const currentWord = teamNames[index];
        
        if (isDeleting) {
        // Delete effect
        if (currentText.length > 0) {
            setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
            }, deletingSpeed);
        } else {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % teamNames.length);
        }
        } else {
        // Typing effect
        if (currentText.length < currentWord.length) {
            setTimeout(() => {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
            }, typingSpeed);
        } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
        }
        }
    }, [currentText, index, isDeleting]);

    // video trigger
    useEffect(() => {
        const video = videoRef.current;
    
        if (video) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Autoplay blocked, user interaction required:", error);
            });
          }
        }
      }, []);
    
    return (
        <div className="home">
            <Header />   
            {/* banner section */}
            <div className="banner">
                <div className="banner-text">
                <h1>USC Climbing Team</h1>
                <p className="typewriter">
                    for {currentText}<span className="cursor"></span>
                </p>
                </div>
            </div>
            <video 
                ref={videoRef} 
                id="myVideo" 
                width="1000" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ display: 'block', margin: 'auto', borderRadius: 20 }}
            >
                <source src="https://firebasestorage.googleapis.com/v0/b/sc-climbing-club.firebasestorage.app/o/banner.mp4?alt=media&token=59ca3831-edac-4a87-8826-542222eb5e84" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <script>
                document.getElementById('vid').play();
            </script>
            {/* welcome section */}
            <div className="section welcome">
                {/* <h1 className="subheading">Welcome to the USC Climbing Team</h1> */}
                <p className="body">We are USC’s largest sport club, dedicated to exploring the outdoors and being active in the climbing community. Whether you’re an experienced climber or completely new to the sport, we have outdoor trips and climbing events for everyone to explore, connect, and challenge themselves!</p>
                <div className="button-var1">
                    <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="button-text-var1">
                        Become a Member
                    </a>
                </div>
            </div>
            {/* overview section */}
            <div className="section overview">
                <h1 className="subheading">What do we do?</h1>
                <div className="rect-container">
                    {overviewItems.map((item, index) => (
                        <div key={index} className="rect">
                            <div className="image-container">
                                <img 
                                    src={item.img} 
                                    alt={item.text} 
                                />
                            </div>
                            <div className="text-container">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-var1">
                    <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="button-text-var1">
                        Become a Member
                    </a>
                </div>
            </div>
            {/* interactive map section */}
            <div className="section footprints">
                <div className="footprints-header">
                    <img src={leftFootprint} alt="Left Image" className="footprints-image" />
                    <div className="footprints-text">
                        <h1 className="subheading">Our Footprints</h1>
                        <p className="subtitle">
                            We organize free trips for our members every weekend, exploring new climbing spots and building community. 
                            It’s our way of making climbing accessible and creating shared experiences.
                        </p>
                    </div>
                    <img src={rightFootprint} alt="Right Image" className="footprints-image" />
                </div>
                <Map />
                <div className="button-var1">
                    <button onClick={() => navigate('/trips')} className="button-text-var1">
                        View all trips
                    </button>
                </div>
            </div>
            {/* eboard section */}
            {/* <div className="section eboard">
                <div className="eboard-header">
                    <img src={leftFirework} alt="Left Image" className="firework-image" />
                    <div className="eboard-text">
                        <h1 className="subheading">Meet E-board</h1>
                        <p className="subtitle">
                        Meet the team behind the USC Climbing Team! Our e-board members work tirelessly to organize practices, plan exciting outdoor trips, and host fun social events that bring our community together.
                        </p>
                    </div>
                    <img src={rightFirework} alt="Right Image" className="firework-image" />
                </div>
            </div> */}
            {/* sponsor section */}
            <div className="section sponsors">
                <div className="footprints-header">
                    <img src={confettiLeft} alt="Left Image" className="confetti-image" />
                    <div className="footprints-text">
                    <h1 className="subheading">Sponsors</h1>
                    <p className="subtitle">
                        We partner with local businesses and organizations to enhance the climbing community. Through shared resources, sponsorships, and events, we work together to support our climbers.
                    </p>
                    {/* Sponsors Grid */}
                    <div className="logos-grid">
                        {sponsorItems.map((sponsor, index) => (
                        <a 
                            key={index} 
                            href={sponsor.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`logo-container ${hoveredIndex !== null && hoveredIndex !== index ? "greyed-out" : ""}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={sponsor.logo} alt={`Logo ${index + 1}`} />
                        </a>
                        ))}
                    </div>
                    </div>
                    <img src={confettiRight} alt="Right Image" className="confetti-image" />
                </div>
            </div>   
            <Footer />
        </div>
    );
};

export default HomePage;