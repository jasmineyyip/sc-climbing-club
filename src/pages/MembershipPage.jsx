import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from '../components/InfoCard';
import './MembershipPage.css';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faAward, faTags, faMoneyBillWave, faToolbox, faPeopleGroup, faShirt, faTrophy, faHandshakeAngle, faHeart } from '@fortawesome/free-solid-svg-icons';

// social icons
import slackLogo from '../assets/membership/socials/slack_logo.png';
import venmoLogo from '../assets/membership/socials/venmo_logo.png';
import zelleLogo from '../assets/membership/socials/zelle_logo.png';
import touchstoneLogo from '../assets/membership/socials/touchstone_logo.png';
import imleagueLogo from '../assets/membership/socials/imleague_logo.png';
import cliffsLogo from '../assets/membership/socials/cliffs_logo.png';
import logo from '../assets/logo.png';

const joinItems = [
  { text: 'FREE outdoor trips every weekend', icon: faCampground, desc: 'We organize free outdoor trips every weekend - from local LA crags all the way to Nevada, Utah, and Arizona!' },
  { text: 'Monthly scholarships', icon: faAward, desc: 'We offer monthly scholarships to help reduce the barrier to access to climbing' },
  { text: 'Gear discounts from sponsors', icon: faTags, desc: 'Gear discounts from our sponsors (often free and highly discounted!)' },
  { text: 'Refunded $50 Cliffs of Id initiation fee', icon: faMoneyBillWave, desc: 'We refund the $50 initiation fee at Cliffs of Id, the gym we train at! It’s cheaper to pay our $30 dues and get the initiation fee waived than to go to Cliffs on your own!' },
  { text: 'Gear lending program', icon: faToolbox, desc: 'Need gear for a trip? Borrow from us at no cost.' },
  { text: 'Social events: mixers, bonfires, etc.', icon: faPeopleGroup, desc: 'We organize social events throughout the semester - mixers, formals, bonfires, etc.' },
  { text: 'Free team gear and merch', icon: faShirt, desc: 'Get free USC Climbing merch including t-shirts, stickers, and more!' },
  { text: 'Competition team', icon: faTrophy, desc: 'Join our comp team to represent USC and climb with fellow crushers.' },
  { text: 'Affinity groups (POC, womxn, queer)', icon: faHandshakeAngle, desc: 'Find your community through affinity groups for underrepresented communities, such as POC, womxn, queer, and international climbers.' },
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
      <div className="perks-section">
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
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-number">1</div>
              <div className="step-info">
                <div className="step-title">Join Slack</div>
              </div>
            </div>
            <div className="step-detail">
              Join our slack! This is our main point of contact to our members.
            </div>
            <InfoCard
                logo={slackLogo}
                name="Slack"
                handle={null}
                link="https://scclimbingclub.slack.com/ssb/redirect"
            />
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-number">2</div>
              <div className="step-info">
                <div className="step-title">Pay Dues</div>
              </div>
            </div>
            <div className="step-detail">
              Pay $30 dues on either Venmo or Zelle. This helps us keep trips and events running!
            </div>
            <InfoCard
                logo={venmoLogo}
                name="Venmo"
                handle="@oweneastman"
                supplementary="Last four digits of phone number is 3969"
            />
            <InfoCard
                logo={zelleLogo}
                name="Zelle"
                handle="425-533-3969"
            />
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-number">3</div>
              <div className="step-info">
                <span className="step-tag">For practice</span>
                <div className="step-title">Get Gym Access</div>
              </div>
            </div>
            <div className="step-detail">
              Purchase a touchstone gym college student membership for $97/month. Cliffs of Id, a touchstone gym, is where we host team practices! Once you have paid club dues, your initiation fee of $50 will be waived - just let a touchstone staff know that you are with USC Climbing.
            </div>
            <InfoCard
                logo={touchstoneLogo}
                name="Touchstone Climbing"
                link="https://touchstoneclimbing.com/cliffs-of-id/members/"
            /> 
          </div>

          {/* Step 4 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-number">4</div>
              <div className="step-info">
                <span className="step-tag">For trips</span>
                <div className="step-title">IM League Registration</div>
              </div>
            </div>
            <div className="step-detail">
              If you are interested in going on outdoor trips or competing with our collegiate team, you have to create an account with IM League and pay an additional $25 to register yourself under USC’s student organizations (for safety and representation purposes).
            </div>
            <InfoCard
                logo={imleagueLogo}
                name="IM League Registration"
                link="https://myrecsports.usc.edu/Membership/Index"
            /> 
          </div>

          {/* Step 5 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-number">5</div>
              <div className="step-info">
                <div className="step-title">Come to Practice</div>
              </div>
            </div>
            <div className="step-detail">
              <p>We have practice twice a week at Cliffs of Id.</p>
              <p>Tuesday 7:00pm-9:00pm</p>
              <p>Thursday 7:30pm-9:30pm</p>
              <p>No cars? No worries! Check out our #carpool channel on Slack and ask for a ride.</p>
            </div>
            <InfoCard
                logo={cliffsLogo}
                name="Cliffs of Id"
                link="https://touchstoneclimbing.com/cliffs-of-id/"
            /> 
            <InfoCard
                logo={logo}
                name="More about practices"
                link="" // TODO: direct to practice page
            /> 
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MembershipPage;