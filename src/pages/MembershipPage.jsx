import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './MembershipPage.css';

const joinItems = [
  { text: 'FREE outdoor trips every weekend', img: 'your_logo1.png' },
  { text: 'Monthly scholarships', img: 'your_logo2.png' },
  { text: 'Gear discounts from sponsors', img: 'your_logo3.png' },
  { text: 'Refunded $50 Cliffs of Id initiation fee', img: 'your_logo4.png' },
  { text: 'Gear lending program', img: 'your_logo5.png' },
  { text: 'Social events: mixers, bonfires, etc.', img: 'your_logo6.png' },
  { text: 'Free team gear and merch', img: 'your_logo7.png' },
  { text: 'Competition team', img: 'your_logo8.png' },
  { text: 'Affinity groups (POC, womxn, queer)', img: 'your_logo9.png' },
  { text: 'Amazing, swole-loving community!', img: 'your_logo10.png' },
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
  return (
    <div className="home">
      <Header />

      <div className="section">
        <h1 className="subheading">Join USC Climbing!</h1>
        <div className="card-grid small-cards">
          {joinItems.map((item, index) => (
            <div className="tiny-card" key={index}>
              <img src={item.img} alt={item.text} className="tiny-card-logo" />
              <p>{item.text}</p>
            </div>
          ))}
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