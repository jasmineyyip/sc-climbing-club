import React, { useState, useEffect } from 'react';
import './HomePage.css';
import bannerVideo from '../assets/banner.mp4';

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// import images directly
// overview
import practiceImg from '../assets/overview/practice.png';
import tripsImg from '../assets/overview/trips.png';
import compImg from '../assets/overview/comp.png';
import socialImg from '../assets/overview/social.png';
import gearImg from '../assets/overview/gear.png';
// trips
import redRockImg from '../assets/trips/redrocks.png'
import bishopImg from '../assets/trips/bishop.jpeg'
import cdmImg from '../assets/trips/coronadelmar.jpeg'
// footprints
import leftFootprint from '../assets/footprint-yellow.png'
import rightFootprint from '../assets/footprint-red.png'
// confetti
import confettiLeft from '../assets/confetti-left.png'
import confettiRight from '../assets/confetti-right.png'
// map
import usMap from '../assets/map/us-map.png';
// sponsors
import brightstone from '../assets/sponsors/brightstone.png';
import cotopaxi from '../assets/sponsors/cotopaxi.png';
import evolv from '../assets/sponsors/evolv.png';
import hitorii from '../assets/sponsors/hitorii.png';
import stronghold from '../assets/sponsors/stronghold.png';
import touchstone from '../assets/sponsors/touchstone.png';

// typewriter
const teamNames = ['Trojans.', 'Beginners.', 'Comp Climbers.', 'Women.', 'Queer Climbers.', 'BIPOC Climbers.', 'International Students.', 'Everyone.'];
const typingSpeed = 120;
const deletingSpeed = 40;
const pauseTime = 2000;

const overviewItems = [
    { img: practiceImg, text: 'Practices twice a week' },
    { img: tripsImg, text: 'Free trips every weekend' },
    { img: compImg, text: 'Competitive team' },
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

// list of trip locations with x, y coordinates
const locations = [
    { 
        id: 1, 
        name: "Red Rock Canyon", 
        place: "Las Vegas, NV", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        nickname: "Red Rock", 
        image: redRockImg,
        x: 130, 
        y: 260 
    },
    { 
        id: 2, 
        name: "Bishop", 
        place: "Bishop, CA", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        nickname: "Bishop", 
        image: bishopImg, 
        x: 90, 
        y: 220 
    },
    { 
        id: 3, 
        name: "Corona Del Mar", 
        place: "Newport Beach, CA", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        nickname: "Corona Del Mar", 
        image: cdmImg, 
        x: 70, 
        y: 280 
    }
]

const HomePage = () => {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]); // default location
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); // typewriter
    const [hoveredIndex, setHoveredIndex] = useState(null); // sponsorship hover effect

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
    
    return (
        <div className="home">
            {/* banner section */}
            <div className="banner">
                <div className="banner-text">
                <h1>USC Climbing Team</h1>
                <p className="typewriter">
                    for {currentText}<span className="cursor"></span>
                </p>
                </div>
            </div>
            <video width="900" autoPlay loop muted playsInline className="banner-video" style={{ display: 'block' }}>
                    <source src={bannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            {/* welcome section */}
            <div className="section welcome">
                <h1 className="subheading">Welcome to the USC Climbing Team</h1>
                <p className="body">We are USC's largest student-run climbing club, dedicated to getting Trojans outside and active. Whether you’re an experienced climber or completely new to the sport, we have trips and events for everyone to explore, connect, and challenge themselves beyond the city limits of LA.</p>
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
                        <p className="body">
                            We organize free trips for our members every weekend, exploring new climbing spots and building community. 
                            It’s our way of making climbing accessible and creating shared experiences.
                        </p>
                    </div>
                    <img src={rightFootprint} alt="Right Image" className="footprints-image" />
                </div>
                <div className="map-container">
                    {/* Left Panel - Detail Box */}
                    <div className="details-box">
                        <img src={selectedLocation.image} alt={selectedLocation.name} className="trip-image" />
                        <div className="trip-info">
                            <div className="trip-header">
                                <span className="trip-name">{selectedLocation.name}</span>
                                <span className="trip-place">{selectedLocation.place}</span>
                            </div>
                            <p className="trip-description">{selectedLocation.description}</p>
                            <button className="button-text-var2">View {selectedLocation.nickname} trips</button>
                        </div>
                    </div>

                    {/* Right Panel - Interactive Map */}
                    <div className="map-wrapper">
                        <img src={usMap} alt="US Map" className="map-image" />
                        {locations.map((loc) => (
                            <div
                                key={loc.id}
                                onClick={() => setSelectedLocation(loc)}
                                className="location-pin"
                                style={{
                                    top: `${loc.y}px`,
                                    left: `${loc.x}px`,
                                    color: selectedLocation.id === loc.id ? "#990000" : "#FFCC00",
                                }}
                            >
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button-var1">
                    <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="button-text-var1">
                        View all trips
                    </a>
                </div>
            </div>
            <div className="section partnerships">
                <div className="footprints-header">
                    <img src={confettiLeft} alt="Left Image" className="confetti-image" />
                    <div className="footprints-text">
                    <h1 className="subheading">Partnerships</h1>
                    <p className="body">
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
        </div>
    );
};

export default HomePage;