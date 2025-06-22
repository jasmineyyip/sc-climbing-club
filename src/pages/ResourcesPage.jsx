import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import resourcesBanner from '../assets/banners/resourcesbanner.jpg';
import './FAQPage.css'; // Reuse the same styles

const resources = [
    {
        category: 'General Resources',
        links: [
            { label: 'DEI and Resources Guide', url: 'https://docs.google.com/document/d/1a2vJdkbxeVFga0kF3JgXIvISwtCA7QrupeirRYBP7q8/edit?tab=t.0' },
            { label: 'Spring 2025 Info Session', url: 'https://docs.google.com/presentation/d/1ZupobUWELqoVj56yf3SojFpzvZfqwZixTd5Sk5t39Pg/edit?slide=id.gcec4d27072_0_0' },
            { label: 'Reimbursements', url: 'https://docs.google.com/forms/d/e/1FAIpQLScWKHCQEYnkqt9Per4Ch9U_a4kThTETMA3lE1-ki8IY9CMMwA/viewform' },
        ],
    },
    {
        category: 'Competition Information',
        links: [
            { label: 'USA Climbing Collegiate Competitor Guide', url: 'https://docs.google.com/document/d/e/2PACX-1vRS4XU2PpbYK2EL5dSBS6YNrrqmBcWPRqW0n3UQy2TxGZ_my8fbo2Bg2ntYrhcc4w/pub?urp=gmail_link' },
            { label: 'Competition Info and Logistics', url: 'https://docs.google.com/document/d/11BVuokE6glXOwGj4sRDb8xojQ2KKU-VTNscrssqTmSs/edit?tab=t.0' },
            { label: 'Purchase Your USAC Collegiate Membership', url: 'https://docs.google.com/document/d/1PD0csmN1p8gSElYi9x2dAiB8u9hfcsL_jUFpR6FGC6s/edit?tab=t.0' },
        ],
    },
    {
        category: 'Gear',
        links: [
            { label: 'Donate Your Old Gear', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfoj9eMF7D9yCyrteTnkPLrJiacnJU248gxzuEtfdWSLRLdUQ/viewform?usp=sf_link' },
            { label: 'Gear Loaning', url: 'https://docs.google.com/forms/d/e/1FAIpQLSe7P2ZPdVs5fbmnXVCbIx7iYslOKrbx6_UF3sEHYYL4F1Bxig/viewform?usp=sf_link' },
            { label: 'Gear Tracking', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd9sFnWYTpaBIDgM5EoMhdzeHFZvgb1yBUL9-cLvECZ15xreA/viewform?usp=sf_link' },
        ],
    },
    {
        category: 'Safety',
        links: [
            { label: 'Safety Quiz', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfWbuzBl-Cbgj7SFP2EAECd4k93HEMNLv8LjvAMvoGXylmM0g/viewform?usp=sf_link' },
            { label: 'How to Fall While Bouldering', url: 'https://docs.google.com/document/d/1d2XGCqoKlK8KWI2GX1qFPDs1aY5bmJ96x6f6tuloAO4/edit?tab=t.0' },
            { label: 'How to Spot While Bouldering', url: 'https://docs.google.com/document/d/1mcqQHnx78YfcZ7sJ3RqybVdbU7n38weFhy1uRp3PppY/edit?usp=sharing' },
            { label: 'Safety for Lead Climbing Outside', url: 'https://docs.google.com/document/d/1HKSSfsN9qBevM0HbRxyrdgWSi-kO6Hq07vkw2bA0wm0/edit?usp=sharing' },
            { label: 'Safety for Top Rope', url: 'https://docs.google.com/document/d/1eaF9uw2f1SVlc4rDVFHP-Bc-ORMWbvFAxZQFX5Qs-y0/edit?usp=sharing' },
            { label: 'Trip Incident Form', url: 'https://docs.google.com/forms/d/e/1FAIpQLSedk36hk_drmsMEnSiUquLePF5pTS6TS2U0QgPVN0QU6EwPvA/viewform?usp=sf_link' },
            { label: 'Spotting and Crash Pads for Outdoor Bouldering (Video)', url: 'https://youtu.be/tQUSfdGhY4c?si=9cGlde--QnxvkzKl' },
            { label: 'Safety Check for Top Rope (Video)', url: 'https://youtu.be/pZoyqXTfWn0?si=IeHYZx3V6bJWXHzD' },
            { label: 'How to Belay with a Gri-Gri (Video)', url: 'https://www.youtube.com/watch?v=FHdqjjyeTtg' },
            { label: 'Why Helmets are Mandatory While Climbing Outside (Video)', url: 'https://youtu.be/lOUN560b4cY?si=gDIDBKApsSjJO7oB' },
        ],
    },
];

const ResourcesPage = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <>
            <Header />
            <Banner image={resourcesBanner} text="Resources" />

            <div className="faq-container">
                {resources.map((section, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleCategory(index)}>
                            <h3>{section.category}</h3>
                            <span>{openCategory === index ? '-' : '+'}</span>
                        </div>
                        {openCategory === index && (
                            <div className="faq-answer">
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default ResourcesPage;