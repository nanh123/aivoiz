import React from "react";
import './header.css';

import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/react.svg';

function HeaderBody() {
    const location = useLocation();
    return (
        <>
            <div className="logo">
                <Logo img={logo} alt="Aivoiz" />
            </div>
            <div className="menu">
                <ul className="navbar">
                    <li>
                        <Link to="/" className={`navLink ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li>
                        <Link to="/whyUs" className={`navLink ${location.pathname === '/whyUs' ? 'active' : ''}`}>Why Aivoiz</Link>
                    </li>
                    <li>
                        <Link to="/case" className={`navLink ${location.pathname === '/case' ? 'active' : ''}`}>Case Study</Link>
                    </li>
                    <li>
                        <Link to="/features" className={`navLink ${location.pathname === '/features' ? 'active' : ''}`}>Features</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs" className={`navLink ${location.pathname === '/aboutUs' ? 'active' : ''}`}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`navLink ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/demo" className={`navLink ${location.pathname === '/demo' ? 'active' : ''}`}>Book a Demo</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

function Logo({ img }) {
    return (
        <img src={img} alt="Logo" />
    );
}

export default function Header() { 
    return (
        <>
            <div className="header">
                <HeaderBody />
            </div>
        </>
    );
}
