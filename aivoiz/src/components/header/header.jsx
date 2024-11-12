import React from "react";
import './header.css'

export default function header() {
    return (
        <div className="header">
            <div className="logo">
                Aivoiz
            </div>
            <div className="menu">
                <ul className="navbar">
                    <li>Home</li>
                    <li>Why aivoiz</li>
                    <li>Case study</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Book a demo</li>
                </ul>
            </div>
        </div>
    );
}