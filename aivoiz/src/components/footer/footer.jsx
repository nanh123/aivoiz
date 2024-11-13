import React from "react";
import logo from "../../assets/react.svg"
import "./footer.css"

import FooterLogo from '../../assets/footer/footer_logo.png'

export default function footer() {
    return (
        <div className="bgFooter">
            <div className="footer">
                <div className="logo">
                    <img src={logo} alt="Aivoiz" />
                </div>
                <div className="text">
                    <p>Copyright © 2024 aivoiz Co., Ltd.</p>
                    <p>aivoiz Co., Ltd.</p>
                    <p>8 Ho Tai Trau Rd., Long Bien, Hanoi, Vietnam</p>
                    <p>hello@aivoiz.com</p>
                </div>
            </div>
        </div>
    );
}