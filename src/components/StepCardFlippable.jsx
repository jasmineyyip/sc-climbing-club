import React, { useState, useEffect } from 'react';
import './StepCardFlippable.css';

const StepCardFlippable = ({ front = {}, back = {} }) => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        setIsTouchDevice(isTouch);
    }, []);

    const {
        step,
        title,
        tag,
        detail
    } = front;

    const {
        title: backTitle,
        detail: backDetail,
        links: backLinks = []
    } = back;

    const renderDetail = (data) => {
        if (Array.isArray(data)) {
            return data.map((d, i) => <p key={i}>{d}</p>);
        } else if (typeof data === 'string') {
            return <p>{data}</p>;
        } else {
            return data; // render raw JSX (like <ul>)
        }
    };

    return (
        <>
            <div
                className={`step-card-wrapper ${isTouchDevice ? 'flipped-' + flipped : 'hover-enabled'}`}
                onClick={isTouchDevice ? () => setFlipped(!flipped) : undefined}
            >
                <div className="step-card-inner" style={{ transform: isTouchDevice && flipped ? 'rotateY(180deg)' : '' }}>

                    {/* FRONT */}
                    <div className="step-card front">
                        <div className="step-header">
                            <div className="step-number">{step}</div>
                            <div className="step-info">
                                {tag && <span className="step-tag">{tag}</span>}
                                <div className="step-title">{title}</div>
                            </div>
                        </div>
                        <div className="step-detail">{renderDetail(detail)}</div>
                    </div>

                    {/* BACK */}
                    <div className="step-card back">
                        <div className="step-info back-info">
                            <div className="step-title">{backTitle}</div>
                        </div>
                        <div className="step-detail">{renderDetail(backDetail)}</div>
                        {backLinks.length > 0 && (
                            <div className="step-links">
                                {backLinks.map((link, i) => (
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" key={i}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isTouchDevice && (
                <div className="flip-hint">Tap to flip 🔄</div>
            )}
        </>
    );
};

export default StepCardFlippable;
