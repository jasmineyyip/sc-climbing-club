// src/components/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ image, text }) => {
    return (
        <div className="banner-section values">
            <div className="banner-image values">
                <img src={image} alt={text} />
                <div className="banner-text values">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;