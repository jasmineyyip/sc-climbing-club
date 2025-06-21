import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQBanner from '../assets/banners/faqbanner.png';
import './FAQPage.css';

const faqs = [
    {
        question: 'How do I access the slack?',
        answer: (
            <p>
                You can access the slack through our Linktree:&nbsp;
                <a href="https://linktr.ee/uscclimbing" target="_blank" rel="noopener noreferrer">
                    linktr.ee/uscclimbing
                </a>
            </p>
        ),
    },
    {
        question: 'Do I need any previous climbing experience to join the club?',
        answer: 'No! We try to accommodate all levels of climbing! During our first few practices, we go over basic technique/safety and can help with any questions you have. Also, every practice plan has variations for each skill level. Additionally, trips do not have a required skill level, and club trips are a great, safe way to be introduced to climbing outside. ',
    },
    {
        question: 'What gear do I need to apply to trips?',
        answer: 'We only require that you have your own climbing shoes! Besides that we can provide crash pads, ropes, and harnesses. For overnight trips, we recommend that you have our own sleeping bag and pad, but we also have a few extra of those, so not having those, should not deter you from applying for trips. ',
    },
    {
        question: 'What climbing shoes should I get?',
        answer: 'For shoes, it can depend on personal preference. Shoes go from flat to aggressive with flat not having as much of an arch shape and are good for beginners and slab climbing (an example would be the Finale or Tarantulace by La sportiva) . More aggressive shoes have more of an arch and more rubber on the toe and heel (an example would be the Skwama by La sportiva). Additionally, cheaper shoes can be found at upcycles (REI Manhattan Beach) or gear exchanges (Bishop Gear Exchange). Each climber likes different features, so it will take some trial and error to find the exact shoes you like.',
    },
    {
        question: 'How much do trips cost?',
        answer: 'Trips are completely free for members. We also reimburse gas for drivers. However, we do not reimburse for food or water, so those are the only costs you are responsible for. ',
    },
    {
        question: 'Are practices mandatory?',
        answer: 'Nope, practices do not have required attendance, but they are really fun and useful to improve technique. Attendance for comp practice is more strict, and if you miss comp practices, you will be expected to make up the practice plan on your own time.',
    },
    {
        question: 'What do I do if I miss a sign up for a trip that I really wanted to go on?',
        answer: 'Let the trip leads know that you are interested in the trip and they will put you on a waitlist. If someone drops, they will contact you.',
    },
    {
        question: 'What are each of the slack channels for?',
        answer: (
            <div>
                <p><span className="slack-tag">#announcements</span>: All important information regarding the club as a whole such as dues and social events will be posted here.</p>
                <p><span className="slack-tag">#general</span>: This is a random channel where people can interact, ask questions or post anything climbing related (like meeting Shawn Raboutou!)</p>
                <p><span className="slack-tag">#practices</span>: This is where the captains will be posting practice plans and any information regarding Cliffs/membership (please use the #general for any questions regarding practices, this channel is only for captains to post info).</p>
                <p><span className="slack-tag">#carpool</span>: This is where members can post rides to cliffs, so that we can get as many people to practice as possible!</p>
                <p><span className="slack-tag">#trips</span>: This channel is where the trip announcements and sign-ups will be posted, so make sure you have notifications for this channel turned on, so you don’t miss a signup!</p>
                <p><span className="slack-tag">#climb-safe</span>: This channel has bookmarked the safety information for bouldering, spotting, and rope climbing outside. Please take the time to go through these documents to educate yourself on how to climb safely outside to reduce risk and increase fun. Additionally, if any members have personal stories or anecdotes about climbing safely please put them in this channel.</p>
                <p><span className="slack-tag">#touchstone-member-passes</span>: Each touchstone member gets two free guest passes: first time passes (for people who have never been to a touchstone gym before) and first Friday passes (they can guest anyone into the gym even if they have been to touchstone gym before). This channel is where people can exchange passes.</p>
                <p><span className="slack-tag">#slacking-off</span>: Slacklining channel, where people can post if they put a line up somewhere on campus.</p>
                <p>
                    We also have affinity groups for&nbsp;
                    <span className="slack-tag">womxn</span>,&nbsp;
                    <span className="slack-tag">queer</span>,&nbsp;
                    <span className="slack-tag">international</span>, and&nbsp;
                    <span className="slack-tag">BIPOC</span> members.
                </p>
            </div>
        ),
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <div className="banner-section" style={{ padding: '50px 0 20px', width: '90%', margin: 'auto' }}>
                <div className="banner-image" style={{ position: 'relative' }}>
                    <img src={FAQBanner} alt="FAQ Banner" style={{ width: '100%', height: 'auto', borderRadius: '0px' }} />
                    <div className="banner-text values">
                        <h1>FAQ</h1>
                    </div>
                </div>
            </div>

            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleAccordion(index)}>
                            <h3>{faq.question}</h3>
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                {typeof faq.answer === 'string' ? (
                                    faq.answer.split('\n').map((line, i) => <p key={i}>{line}</p>)
                                ) : (
                                    faq.answer
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default FAQPage;
