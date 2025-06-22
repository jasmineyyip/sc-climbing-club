import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import './PracticePage.css';

// Images
import practiceBanner from '../assets/banners/practicesbanner.png';
import costume from '../assets/practices/costume.png';
import bingo from '../assets/practices/bingo.png';
import connect4 from '../assets/practices/connect4.png';
import plank from '../assets/practices/plank.png';

const PracticePage = () => {
    return (
        <>
            <Header />
            {/* Banner Section */}
            <Banner image={practiceBanner} text="Practice" />

            {/* Practice Intro */}
            <div className="section practice-intro">
                <h1 className="subheading">Join Our Practices</h1>
                <p className="body">
                Our club practices Monday (7-9pm) and Thursday (7:30-9:30) at Cliffs of Id in Culver City. Practices are open to all skill levels, from first-time climbers to seasoned veterans.
                </p>
                <p className="body">
                While practices are optional, if you want to get involved with the climbing team, practices are the best way to make friends since we go to the gym so consistently. 
                </p>
                <p className="body">
                We have 10 minute group warm ups in the ropes area at the beginning of each practice, followed by a climbing activity, and ending with a group core exercise in the yoga room for the last 20 minutes.
                With our practice plans, we aim to teach you proper technique, improve your strength and endurance, and meet new people and have fun along the way.
                </p>
            </div>

            {/* Example Practices */}
            <div className="section example-practices">
                <h1 className="subheading">What Do Practices Look Like?</h1>

                <div className="practice-gallery">
                    <div className="practice-card">
                        <img src={costume} alt="Costume Game 1" />
                        <p className="caption">Three costumes were distributed to people at practice. Whoever was wearing a costume had to do 4 laps on a hard climb before they could hand off their costume to someone else.</p>
                    </div>
                    <div className="practice-card">
                        <img src={bingo} alt="Climbing Bingo" />
                        <p className="caption">Climbing BINGO challenges</p>
                    </div>
                </div>
            </div>

            {/* Core Games Section */}
            <div className="section core-games">
                <h1 className="subheading">Group Core Exercises</h1>

                <div className="practice-gallery">
                    <div className="practice-card">
                        <img src={connect4} alt="Connect 4 Core" />
                        <p className="caption">Connect 4 Core — don’t drop the plank!</p>
                    </div>
                    <div className="practice-card">
                        <img src={plank} alt="Plank Contest" />
                        <p className="caption">Plank contest! (This is our tradition, the first core game of every semester is a plank contest)</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PracticePage;