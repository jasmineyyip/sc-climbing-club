import React from 'react';
import './TrainingCard.css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


const TrainingCard = ({ step, title, tag, detail, motivation }) => {
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
                <h4 className="card-motivation-title">
                    <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: '6px' }} />
                    Why
                </h4>
                {renderSection(motivation)}
            </div>
        </div>
    );
};

export default TrainingCard;