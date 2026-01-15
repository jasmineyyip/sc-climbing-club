import React, { useState } from 'react';
import Header from "../components/Header";
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import StepCard from '../components/StepCard';
import './MembershipPage.css';
import '../components/CardGrid.css';

// images
import membershipBanner from '../assets/banners/membershipbanner.png';

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
  { text: 'Refunded $50 Cliffs of Id initiation fee', icon: faMoneyBillWave, desc: 'We refund the $50 initiation fee at Cliffs of Id, the gym we train at! It’s cheaper to pay our $45 dues and get the initiation fee waived than to go to Cliffs on your own!' },
  { text: 'Gear lending program', icon: faToolbox, desc: 'Need gear for a trip? Borrow from us at no cost.' },
  { text: 'Social events', icon: faPeopleGroup, desc: 'We organize social events throughout the semester - mixers, formals, bonfires, poker nights, and more!' },
  { text: 'Free team gear and merch', icon: faShirt, desc: 'Get free USC Climbing merch including t-shirts, stickers, and more!' },
  { text: 'Competition team', icon: faTrophy, desc: 'Join our comp team to represent USC and climb with fellow crushers.' },
  { text: 'Affinity groups (POC, womxn, queer)', icon: faHandshakeAngle, desc: 'Find your community through affinity groups for underrepresented communities, such as POC, womxn, queer, and international climbers.' },
];

const MembershipPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="home">
      <Header />
      <Banner image={membershipBanner} text="Membership" />
      <div className="section">
        <h1 className="subheading">Membership Perks</h1>
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

      <div className="section sign-up-steps">
        <h1 className="subheading">How to sign up</h1>
        <div className="card-grid step-cards">
          {/* Step 1 */}
          <StepCard
            step="1"
            title="Join Slack"
            detail="Join our slack! This is our main point of contact to our members."
            infoCards={[
              {
                logo: slackLogo,
                name: "Slack",
                link: "https://join.slack.com/t/scclimbingclub/shared_invite/zt-3nijqfgea-Nq6944vGaI6OkEbBLRWMyQ"
              }
            ]}
          />

          {/* Step 2 */}
          <StepCard
            step="2"
            title="Pay Dues"
            detail="Pay $45 dues on either Venmo or Zelle. This helps us keep trips and events running!"
            infoCards={[
              {
                logo: venmoLogo,
                name: "Venmo",
                handle: "@oweneastman",
                supplementary: "Last four digits of phone number is 3969"
              },
              {
                logo: zelleLogo,
                name: "Zelle",
                handle: "425-533-3969"
              }
            ]}
          />

          {/* Step 3 */}
          <StepCard
            step="3"
            title="Get Gym Access"
            tag="For practice"
            detail="Purchase a touchstone gym college student membership for $97/month. Cliffs of Id, a touchstone gym, is where we host team practices! Once you have paid club dues, your initiation fee of $50 will be waived - just let a touchstone staff know that you are with USC Climbing."
            infoCards={[
              {
                logo: touchstoneLogo,
                name: "Touchstone Climbing",
                link: "https://touchstoneclimbing.com/cliffs-of-id/members/"
              }
            ]}
          />

          {/* Step 4 */}
          {/* <StepCard
            step="4"
            title="IM League Registration"
            tag="For trips & competition"
            detail="If you are interested in going on outdoor trips or competing with our collegiate team, you have to create an account with IM League and pay an additional $25 to register yourself under USC’s student organizations (for safety and representation purposes)."
            infoCards={[
              {
                logo: imleagueLogo,
                name: "IM League Registration",
                link: "https://myrecsports.usc.edu/Membership/Index"
              }
            ]}
          /> */}

          {/* Step 4 */}
          <StepCard
            step="4"
            title="Come to Practice"
            detail={[
              // "Monday: 7:00pm–9:00pm",
              "Tuesday: 7:30pm–9:30pm",
              // "Tuesday (Comp Team): TBC",
              "Thursday 7:30pm–9:30pm",
              "No cars? No worries! Check out #carpool channel on Slack and ask for a ride."
            ]}
            infoCards={[
              {
                logo: cliffsLogo,
                name: "Cliffs of Id",
                link: "https://touchstoneclimbing.com/cliffs-of-id/"
              },
              {
                logo: logo,
                name: "More about practices",
                link: "/practice" // TODO: add practice page link
              }
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MembershipPage;