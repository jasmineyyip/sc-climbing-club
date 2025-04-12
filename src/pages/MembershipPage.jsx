import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './MembershipPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faAward, faTags, faMoneyBillWave, faToolbox, faPeopleGroup, faShirt, faTrophy, faHandshakeAngle, faHeart } from '@fortawesome/free-solid-svg-icons';

const joinItems = [
  { text: 'FREE outdoor trips every weekend', icon: faCampground, desc: 'Every weekend, we head outdoors to climb, hike, and connect with nature — all for free!' },
  { text: 'Monthly scholarships', icon: faAward, desc: 'Members can apply for exclusive monthly climbing-related scholarships.' },
  { text: 'Gear discounts from sponsors', icon: faTags, desc: 'Save on gear from our climbing sponsors with exclusive discount codes.' },
  { text: 'Refunded $50 Cliffs of Id initiation fee', icon: faMoneyBillWave, desc: 'We cover your $50 initiation fee when you sign up for Touchstone.' },
  { text: 'Gear lending program', icon: faToolbox, desc: 'Need gear for a trip? Borrow from our lending library at no cost.' },
  { text: 'Social events: mixers, bonfires, etc.', icon: faPeopleGroup, desc: 'Join community mixers, bonfires, and themed social nights year-round.' },
  { text: 'Free team gear and merch', icon: faShirt, desc: 'Get free USC Climbing merch including shirts, stickers, and more!' },
  { text: 'Competition team', icon: faTrophy, desc: 'Join our comp team to represent USC and climb with fellow crushers.' },
  { text: 'Affinity groups (POC, womxn, queer)', icon: faHandshakeAngle, desc: 'Find your community through inclusive affinity groups and events.' },
];

const steps = [
  {
    step: '1',
    title: 'Join Slack',
    detail: 'This is our main point of contact: linktr.ee/uscclimbing',
  },
  {
    step: '2',
    title: 'Pay Dues',
    detail:
      'Send $30 to @oweneastman (Venmo) or 425-533-3969 (Zelle). This helps us keep trips and events running!',
  },
  {
    step: '3',
    title: 'Get Gym Access',
    detail:
      'Purchase a Touchstone student membership ($97/month). Mention USC Climbing to waive the $50 initiation.',
  },
  {
    step: '4',
    title: 'IM League Registration',
    tag: 'optional',
    detail:
      'If you’re joining outdoor trips or the comp team, register on IM League and pay $25. https://myrecsports.usc.edu/Membership/Index',
  },
];

const MembershipPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="home">
      <Header />
      <h1 className='subheading big'>Membership</h1>
      <div className="section perks-section">
        <div className="perks-container">
          {/* Left Side */}
          <div className="perks-detail">
            <h3>PERKS</h3>
            <h2>{joinItems[selectedIndex].text}</h2>
            <p className="perk-desc">{joinItems[selectedIndex].desc}</p>

            <div className="perk-nav-buttons">
              <button 
                disabled={selectedIndex === 0} 
                onClick={() => setSelectedIndex(selectedIndex - 1)}
              >
                ←
              </button>
              <button 
                disabled={selectedIndex === joinItems.length - 1} 
                onClick={() => setSelectedIndex(selectedIndex + 1)}
              >
                →
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="perks-grid">
            {joinItems.map((item, index) => (
              <div 
                key={index}
                className={`tiny-card ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >
                <FontAwesomeIcon icon={item.icon} size="2x" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="subheading">How to become a member</h1>
        <div className="card-grid step-cards">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-header">
                <div className="step-number">{step.step}</div>
                <div className="step-info">
                  {step.tag && <span className="step-tag">{step.tag}</span>}
                  <div className="step-title">{step.title}</div>
                </div>
              </div>
              <div className="step-detail">{step.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MembershipPage;