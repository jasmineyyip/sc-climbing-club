// src/components/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ image, text }) => {
    return (
        <div className="banner-section">
            <div className="banner-image">
                <img src={image} alt={text} />
                <div className="banner-text">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;