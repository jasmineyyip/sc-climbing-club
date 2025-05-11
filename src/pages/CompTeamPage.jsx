import React from 'react';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepCard from '../components/StepCard';
import StepCardFlippable from '../components/StepCardFlippable';
import TrainingCard from '../components/TrainingCard';

// images
import valueBanner from '../assets/banners/valuesbanner.png';
import value1 from '../assets/values/value-1.png';

// social logos
import GDocLogo from '../assets/membership/socials/gdoc_logo.png';

import './CompTeamPage.css';

const CompTeamPage = () => {
    return (
        <>
            <Header />
            {/* Banner Section */}
            <div className="banner-section" style={{ padding: '50px 0 20px', width: '90%', margin: 'auto' }}>
                <div className="banner-image" style={{ position: 'relative' }}>
                    <img
                        src={valueBanner}
                        alt="Our Values"
                        style={{ width: '100%', height: 'auto', borderRadius: '0px' }}
                    />
                    <div className="banner-text values">
                        <h1>Competition</h1>
                    </div>
                </div>
            </div>

            {/* intro section */}
            <div className="section comp-intro">
                <h1 className="subheading">Represent USC and Compete With Us!</h1>
                <p className="body">
                    We're proud members of the <a target="_blank" href="https://docs.google.com/document/d/1p0O-tDTGiCVvzbG2ybF-bzRQfY_c-NnT282hOMla6zs/edit?tab=t.0">West Coast Division</a>, covering California, Idaho, Nevada, Oregon, Washington, Alaska, and Hawaii!
                    Being in such a central region means most competitions are nearby — giving you a strong chance to represent USC without major travel barriers.
                </p>
            </div>

            {/* intro section */}
            <div className="section comp-plan">
                <h1 className="subheading">Comp Team Practice</h1>
                <p className="body">
                    Come practice an additional day with USC Climbing if you are interested in competing in the USA Climbing Collegiate Circuit, or you just want a more structured training plan! Individualized training plans are given out at the beginning of the year to each climber, based on their strengths, weaknesses, and climbing goals! Training is separated into 6-8 week blocks, focused on things like strength, power, and endurance. Comp team practices are every Tuesday from 6-8pm at Cliffs of Id led by Chance Guyton and Devin Harmon.
                </p>
                <p className="body">Here's an example practice plan:</p>
                <p className="body"><strong>Objective: get stronger (together), improve technique and awareness on the wall, let’s learnnnnn</strong></p>

                <div className="training-plan">
                    {/* Step 1 */}
                    <TrainingCard
                        step="1"
                        title="Warm-Up"
                        tag="0–45 minutes"
                        detail={[
                            "Arrive early and start moving.",
                            "Use dynamic stretches and warm-up routes.",
                            "Get mentally prepped for the session."
                        ]}
                        motivation={[
                            "Prevents injury.",
                            "Improves performance during intense climbs.",
                            "Gets your body and mind in sync."
                        ]}
                    />

                    {/* Step 2 */}
                    <TrainingCard
                        step="2"
                        title="V Points"
                        tag="45 minutes"
                        detail={[
                            "Teams have 45 minutes to collect as many V points as possible (V6 = 6 points).",
                            "Avoid resting off the wall — instead, do lower grade climbs and focus on breathing.",
                            "Stay near your max grade to train trying hard while tired.",
                            "Report to a captain every few points for tracking.",
                        ]}
                        motivation={[
                            "Power endurance and active recovery.",
                            "Better endurance = more quality attempts without getting exhausted.",
                            "Together we’re stronger❗🤝"
                        ]}
                    />

                    {/* Step 3 */}
                    <TrainingCard
                        step="3"
                        title="Low % Repeats"
                        tag="45-90 minutes"
                        detail={[
                            "Pick or create a move that is difficult for you, not because it’s physically hard, but because it’s difficult to execute the beta perfectly (e.g. techy slab moves, coordination moves, very precise heel hooks, or dynos)",
                            "Once you do the move, see how many times in a row you can repeat it",
                            "During each attempt, think about exactly what you’re doing. Practice mindfulness on the wall",
                            "After each attempt, think about what you did wrong and how to improve",
                            "Once you can do a move 3 times in a row, you’ve mastered it and you can move on to another move",
                            "If you’re having trouble finding moves, come to the captains and we’ll make one for you",
                        ]}
                        motivation={[
                            "The point of this exercise is to learn. Repeating moves is a great way to learn general patterns of body positioning in climbing.",
                            "In comps you will have to try boulders more than once. Being able to replicate and optimize your beta ensures that you won’t waste attempts by falling on moves that you didn’t fall on before",
                            "A common scenario in comps: A climber gets to the last move on their first try, on their next 4 attempts they fall on the first move because they don’t know exactly what they did the first time. This won’t be you!",
                            "This exercise helps build the habit of asking yourself “why?” after every time you fall",
                        ]}
                    />
                </div>
            </div>

            {/* how to */}
            <div className="section comp-membership">
                <h1 className="subheading">How to become a member</h1>
                <div className="card-grid step-cards">
                    {/* Step 1 */}
                    <StepCard
                        step="1"
                        title="Sign up for membership"
                        detail="Follow the instruction via the link below to sign up for a USA Climbing Collegiate membership."
                        infoCards={[
                            {
                                logo: GDocLogo,
                                name: "How to get your membership",
                                link: "https://urldefense.com/v3/__https://docs.google.com/document/d/1PD0csmN1p8gSElYi9x2dAiB8u9hfcsL_jUFpR6FGC6s/edit?usp=sharing_eil&ts=66fcaf08__;!!LIr3w8kk_Xxm!uILbpR97Z5j48dNgr0s3xqxURIG5ofQUW1_I-Jz4V3HgwH8_1l5CX-9bIdrAb_olKV6gGkVjjMb6z6jsrb0OLdiB$"
                            }
                        ]}
                    />

                    {/* Step 2 */}
                    <StepCard
                        step="2"
                        title="Reimbursement"
                        detail="We will be reimbursing your collegiate membership, so after you purchase the $65 membership on the website, send an email to climb.usc@gmail.com with the receipt and bank statement of the purchase to get your money back."
                    />

                    {/* Step 3 */}
                    <StepCard
                        step="3"
                        title="Read Important Competition Information"
                        detail="Read this Google doc for more information on how to register for USA Climbing competitions, get your membership reimbursed, choose your division, and understand how to qualify for nationals."
                        infoCards={[
                            {
                                logo: GDocLogo,
                                name: "Important Competition Info",
                                link: "https://docs.google.com/document/d/11BVuokE6glXOwGj4sRDb8xojQ2KKU-VTNscrssqTmSs/edit?tab=t.0"
                            }
                        ]}
                    />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default CompTeamPage;