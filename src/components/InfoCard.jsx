import React from 'react';
import './InfoCard.css';

const InfoCard = ({ logo, name, handle, supplementary, link }) => {
  const content = (
    <div className={`info-card ${supplementary ? 'has-supplementary' : ''}`}>
        <div className="info-top-row">
            <div className="info-left">
                <img src={logo} alt={`${name} logo`} className="info-logo" />
                <span className="info-name">{name}</span>
            </div>
            {handle && <span className="info-handle">{handle}</span>}
        </div>
      {supplementary && (
        <div className="info-supplementary">{supplementary}</div>
      )}
    </div>
  );

  return link ? (
    <a
      href={link}
      className="info-card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default InfoCard;