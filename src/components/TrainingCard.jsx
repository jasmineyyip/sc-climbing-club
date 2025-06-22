import React, { useState } from 'react';
import './TrainingCard.css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const TrainingCard = ({ step, title, tag, detail, motivation }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const renderSection = (data) => {
        if (Array.isArray(data)) {
            return data.map((item, idx) => <p key={idx}>{item}</p>);
        } else if (typeof data === 'string') {
            return <p>{data}</p>;
        } else {
            return data; // support JSX if passed directly
        }
    };

    return (
        <div className="training-card">
            <div className="card-number-wrapper">
                <div className="card-number">{step}</div>
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    {tag && <p className="card-time">{tag}</p>}
                </div>
                <div className="card-detail">
                    {renderSection(detail)}
                </div>
            </div>

            <div className="card-motivation">
                <div
                    className="card-motivation-title"
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ cursor: 'pointer' }}
                >
                    <h4 className="card-motivation-title-text">
                        <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: '6px' }} />
                        Why
                    </h4>
                    <span className="chevron-var1">
                        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                    </span>
                </div>
                {isExpanded && (
                    <div className="card-motivation-details expanded">
                        {renderSection(motivation)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrainingCard;