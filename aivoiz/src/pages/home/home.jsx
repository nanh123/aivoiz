import React from "react";
import "./home.css";

import OpenImage from '../../assets/footer/footer_logo.png';
import imgExp from '../../assets/footer/footer_logo.png';
import founderImg from '../../assets/react.svg';

function Openning() {
    return (
        <>
            <section className="open">
                <div className="text">
                    <h1>
                        <b className="name">GenAI Agents</b>
                    </h1>
                    <h2>in voice & chat</h2>
                    <h2>human-like & multilingual</h2>
                    <p>Accelerate your business by transforming</p>
                    <p>your communication with customers.</p>
                    <p>Don't wait, innovate!</p>
                    <p>Outperform your competitors by starting with us!</p>
                </div>
                <div className="img">
                    <img src={OpenImage} alt="" />
                </div>
            </section>
        </>
    );
}

function Sample() {
    return (
        <>
            <section className="sample">
                <p className="dialogue">
                    Dialogue Sample
                </p>
                <button className="btnDemo">Book a demo</button>
            </section>
        </>
    );
}

function Changer() {
    return (
        <>
            <section className="changer">
                <h1>A game changer</h1>
                <p>for your customer service</p>
                <span>Our advanced technology enables seamless communication in voice and chat,
                    24/7, across all platforms - whether it’s contact centers, websites, or apps.
                    Enhance your ability to reach and support customers quickly and efficiently,
                    all while significantly reducing costs. </span>

                <div className="compare">
                    <ul className="tableCompare">
                        <li>
                            <h2>up to 80%</h2>
                            <span>customer interactions
                                handled by AI agents</span>
                        </li>
                        <li>
                            <h2>+20%</h2>
                            <span>conversion rate increased
                                compared to human agents</span>
                        </li>
                        <li>
                            <h2>up to 50%</h2>
                            <span>cutting down on
                                operation cost</span>
                        </li>
                    </ul>
                </div>

                <div className="ready">
                    <p>Ready to align your business with these goals?</p>
                    <p>Tap into <span>our expertise</span>!</p>
                    <ul className="expertise">
                        <li>
                            <p>Experience in <span>inbound/outbound & AI assistants</span></p>
                            <span>We tailor bots for telesales, NPS, debt collection, customer
                                support, and beyond. We also design highly complex AI phone
                                assistant.</span>
                        </li>
                        <li>
                            <p>Projects in <span>English, Hindi, Japanese, Bahasa, Vietnamese, etc</span></p>
                            <span>Local insights that enable rapid scaling to new languages</span>
                        </li>
                        <li>
                            <p><span>150k+ conversations/day</span></p>
                            <span>Leverage our proven expertise in managing high traffic for clients across various industries</span>
                        </li>
                        <li>
                            <p><span>100+ languages</span></p>
                            <span>being supported. Our bots effortlessly switch between languages,
                                making them perfect for multilingual contact centers.</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

function Experience() {
    return (
        <>
            <section className="exp">
                <div className="text">
                    <h2>Experience the power of our product - <span className="Exptitle">let its performance do the talking!</span></h2>

                    <div className="entry">
                        <span className="title">Outbound Calls for Loan Packages</span>
                        <p><b>Client: </b>Financing Company</p>
                        <p><b>Language: </b>English</p>
                        <p>Reaching out to potential customers to discuss available loan packages, ensuring a seamless experience.</p>
                    </div>
                    <div className="entry">
                        <span className="title">Outbound Promotion Campaigns</span>
                        <p><b>Client: </b>Delivery Company</p>
                        <p><b>Language: </b>Hindi</p>
                        <p>Engaging existing customers with enticing discount offers, driving increased delivery orders and enhancing customer loyalty.</p>
                    </div>
                    <div className="entry">
                        <span className="title">Inbound Information Retrieval for Sales Follow-Up</span>
                        <p><b>Client: </b>Insurance Company</p>
                        <p><b>Language: </b>Japanese</p>
                        <p>Inbound calls to gather customer information, enabling sales representatives to provide tailored consultations promptly.</p>
                    </div>
                    <div className="entry">
                        <span className="title">24/7 Inbound Customer Support</span>
                        <p><b>Client: </b>Government Water Company</p>
                        <p><b>Language: </b>English</p>
                        <p>Support line assists customers with inquiries about procedures, complaints, and more, providing reliable assistance around the clock.</p>
                    </div>
                </div>
                <div className="img">
                    <img src={imgExp} alt="Experiences" />
                </div>
            </section>
        </>
    );
}

function Reason() {
    return (
        <>
            <section className="reason">
                <div className="title">
                    <h2>What makes <span className="reasonTitle">our product stand out</span></h2>
                </div>
                <div>
                    <ul className="tableReason">
                        <li>
                            <p>Natural conversation</p>
                            <span>Our bot engages customers with lifelike voices, expertly handling
                                a variety of questions and objections</span>
                        </li>
                        <li>
                            <p>Omnichannel communication</p>
                            <span>Seamless communication between different platforms. Transition effortlessly
                                between chat and voice, picking up conversations right where they left off.</span>
                        </li>
                        <li>
                            <p>Low latency</p>
                            <span>Enjoy rapid replies with adjustable latency, ensuring a smooth user
                                experience</span>
                        </li>
                        <li>
                            <p>Interruption logic</p>
                            <span>Customers can interrupt AI agents, mimicking natural human conversations for a
                                more engaging interaction</span>
                        </li>
                        <li>
                            <p>Switching between languages</p>
                            <span>Effortlessly understand and switch between languages within a single dialogue</span>
                        </li>
                        <li>
                            <p>API integration</p>
                            <span>Our solution seamlessly connects with your existing systems, including CRM,
                                billing, and third-party SMS/messaging services</span>
                        </li>
                        <li>
                            <p>Saas or on-premise</p>
                            <span>We offer both cloud-based and on-premise solutions to suit your needs</span>
                        </li>
                        <li>
                            <p>Support webRTC </p>
                            <span>Bring our GenAI agents directly into your application, facilitating smooth chats
                                and calls between AI agents and customers</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

function UnderstandCustomer() {
    return (
        <>
            <section className="understandCustomer">
                <div className="imgFounder">
                    <div className="img">
                        <img src={founderImg} alt="Trieu Van Anh, Founder of Aivoiz" />
                    </div>
                    <div className="name">
                        <b>Trieu Van Anh, Founder</b>
                    </div>
                </div>
                <div className="text">
                    <p>Customers don't like talking to bot - we get it!</p>
                    <p>Understanding this, at the forefront of innovation, our mission is to create human-like
                        GenAI agents that revolutionize how businesses and customers communicate, both through
                        voice and chat. We are dedicated to developing champion AI bots that communicate naturally,
                        and achieve your business KPIs just as effectively as human agents, while liberating your
                        team from routine tasks, allowing them to focus on more complex and creative challenges.</p>
                    <b>An impressive 9x% of customers believe they’re conversing with a human when interacting with our bot!</b>
                    <p>Our key method is to duplicate your top performed human agents to hundreds or thousands of
                        AI bots, ensuring your business targets are consistently met. This approach allows us to
                        quickly and seamlessly replicate our local successes across various markets and languages.
                        Your goals are our priority, and we design our AI agents with your vision in mind.</p>
                </div>
            </section>
        </>
    );
}

function Partner() {
    return (
        <>
            <div className="partner">
                <div className="title">
                    <p>Partner program</p>
                </div>
                <div className="text">
                    <p>Join us in leading the way in distributing cutting-edge technology! With our global 
                        expansion, we invite you to be part of our referral and reseller program, complete with 
                        comprehensive support throughout the process. Our team is here to provide tailored advice 
                        for your action plan, aligned with your specific market needs. Together, we’ll work closely 
                        to help you secure those deals. Your success is our success - let’s achieve greatness 
                        together!</p>
                </div>
                <div className="btn">
                    <button>Become our partner</button>
                </div>
            </div>
        </>
    );
}

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="homeBody">
                    < Openning />
                    < Sample />
                    < Changer />
                    < Experience />
                    < Reason />
                    < UnderstandCustomer />
                    < Partner />
                </div>

            </div>
        </>
    );
}