import React from 'react';

// components
import Header from '../components/Header';
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import StepCard from '../components/StepCard';

// images
import valueBanner from '../assets/banners/valuesbanner.png';
import value1 from '../assets/values/value-1.png';
import value2 from '../assets/values/value-2.png';
import value3 from '../assets/values/value-3.png';

// social logos
import gformsLogo from '../assets/membership/socials/gforms.png';

// styling
import './ValuesPage.css';
import '../components/CardGrid.css';

const ValuesPage = () => {
    return (
        <>
            <Header />
            <Banner image={valueBanner} text="Our Values" />
            {/* Section 1 */}
            <div className="value-section">
                <div className="value-container">
                    <div className="value-content">
                        <img src={value1} alt="Who we are" className="value-image" />
                        <div className="value-text">
                            <h2>Who we are</h2>
                            <p>
                                We are a group of USC students who want to get strong together and
                                uplift each other in such an amazing sport! Whether you have never
                                climbed before, have tried climbing a couple times, or are a regular
                                to the gym, we are the place for you! Come join us on amazing trips,
                                practices, and climbing events filled with amazing people and an
                                encouraging space :)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="value-section">
                <div className="value-container">
                    <div className="value-content reverse">
                        <img src={value2} alt="Community" className="value-image" />
                        <div className="value-text">
                            <h2>Community</h2>
                            <p>
                                Our club is truly for everyone! Attendance to practices and trips are
                                not mandatory (but encouraged) - truly immerse yourself in the club
                                as little or as much as you’d like.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="value-section">
                <div className="value-container">
                    <div className="value-content">
                        <img src={value3} alt="Embrace The Challenge" className="value-image" />
                        <div className="value-text">
                            <h2>Embrace The Challenge</h2>
                            <p>
                                We are a club that thrives off of a challenge. Whether that be through
                                solving the mental puzzle of the crux of a V5 at Cliffs, or committing
                                to a scary dyno on ropes outdoors, we love to conquer the move. We
                                come together to encourage learning and enjoyment, and truly embrace
                                the wonderful nature around us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DEI Section */}
            <div className="dei-section">
                <div className="dei-intro">
                    <div className="dei-intro-text">
                        <h2>DEI at USC Climbing</h2>
                        <p>We take DEI very seriously, and hope that everyone feels included and encouraged to be themselves in our spaces. With our affinity group trips and channels (womxn, queer, BIPOC, and international climbers), we pride ourselves in representing people from all backgrounds, shapes, and colors, and are always trying to improve - please let us know if you have any concerns! </p>
                    </div>
                    <div className="aff-groups">
                        <div className="aff-group-card">
                            <div className="emoji">🌈</div>
                            <h3>Queer Climbers</h3>
                            <p>Celebrate and connect with fellow LGBTQ+ climbers.</p>
                        </div>
                        <div className="aff-group-card">
                            <div className="emoji">💪🏽</div>
                            <h3>Womxn Climbers</h3>
                            <p>Empowering all who identify as womxn through climbing.</p>
                        </div>
                        <div className="aff-group-card">
                            <div className="emoji">🧕🏾</div>
                            <h3>BIPOC Climbers</h3>
                            <p>Creating space for Black, Indigenous, and People of Color.</p>
                        </div>
                        <div className="aff-group-card">
                            <div className="emoji">🌍</div>
                            <h3>International Climbers</h3>
                            <p>New to USC? Let’s climb and build community together.</p>
                        </div>
                    </div>
                </div>
                <div className="scholarships">
                    <div className="scholarships-intro-text">
                        <h2>Financial Access & Scholarships</h2>
                        <p>One of our biggest initiatives is reducing the barrier to access to climbing for our members. Climbing bills add up, from the gear to the gym membership to our dues, so we try to give back as much as we can through the USC Climbing Team Scholarships and our Financial Aid Options.</p>
                        <p>To increase access and help with costs, the USC Climbing Club offers scholarships for some members. The scholarship consists of a stipend from the club to be used for charges from Touchstone. We may not be able to fulfill every request each month, so be sure to check the other financial aid options (in particular, the <a href="https://touchstoneclimbing.com/commitment-programs/" target="_blank">Touchstone ATC program)</a>.</p>
                    </div>
                    <div className="scholarships-text">
                        <h2>Apply for Scholarships</h2>
                        <div className="card-grid step-cards">
                            {/* Step 1 */}
                            <StepCard
                                step="1"
                                title="Submit Application"
                                tag="Due the 28th"
                                detail={
                                    <>
                                        To apply for a scholarship, please fill out the form below by the <strong>28th of the month</strong> (e.g. an application for an October scholarship is due September 28th).
                                        <br /><br />
                                        Applicants will be asked to detail their frequency of climbing, involvement in the club, and financial need. Please be as honest and thorough as possible.
                                    </>
                                }

                                infoCards={[
                                    {
                                        logo: gformsLogo,
                                        name: "Scholarship Application Form",
                                        link: "https://forms.gle/9ZvqNM9556eZf9SC6"
                                    }
                                ]}
                            />

                            {/* Step 2 */}
                            <StepCard
                                step="2"
                                tag="29th - 30th"
                                title="Receive Scholarship"
                                detail={
                                    <>
                                        Recipients will be notified by the <strong>29th of the month</strong> if they have been awarded a scholarship for the following month.
                                        <br /><br />
                                        The scholarship amount will be sent via <strong>Venmo, Zelle, or Cash App on the 30th</strong>.
                                    </>
                                }
                            />

                            {/* Step 3 */}
                            <StepCard
                                step="3"
                                tag="Due the 3rd"
                                title="Proof of the Charge"
                                detail={
                                    <>
                                        By the <strong>3rd of the month</strong> the scholarship was sought for, recipients will need to provide proof of the charge from Touchstone (a screenshot of the charge) via the form below.
                                        <br /><br />
                                        <strong>Applicants who do not provide proof</strong> of the charge will not be eligible for scholarship reapplication and may be removed from club membership.
                                    </>
                                }
                                infoCards={[
                                    {
                                        logo: gformsLogo,
                                        name: "Proof of Charge Form",
                                        link: "https://forms.gle/P7nMk32Q4PWTBhiC9"
                                    }
                                ]}
                            />

                            {/* Step 4 */}
                            <StepCard
                                step="4"
                                title="Reapplication"
                                detail="Members are expected to apply (or reapply) for the scholarship each month. For reapplication, members will just be asked to note any changes in their situation."
                            />

                            {/* Step 5 */}
                            <StepCard
                                step="5"
                                title="Questions?"
                                detail="Please direct any questions about scholarships to Jasmine Yip (yipjasmi@usc.edu, or Slack). We appreciate you!"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ValuesPage;