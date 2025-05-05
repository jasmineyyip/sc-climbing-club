import React from 'react';
import InfoCard from './InfoCard';
import './StepCard.css';

const StepCard = ({ step, title, tag, detail, infoCards = [] }) => {
  return (
    <div className="step-card">
      <div className="step-header">
        <div className="step-number">{step}</div>
        <div className="step-info">
          {tag && <span className="step-tag">{tag}</span>}
          <div className="step-title">{title}</div>
        </div>
      </div>
      <div className="step-detail">
        {Array.isArray(detail)
          ? detail.map((d, i) => <p key={i}>{d}</p>)
          : <p>{detail}</p>}
      </div>
      {infoCards.map((card, index) => (
        <InfoCard
          key={index}
          logo={card.logo}
          name={card.name}
          handle={card.handle}
          link={card.link}
          supplementary={card.supplementary}
        />
      ))}
    </div>
  );
};

export default StepCard;