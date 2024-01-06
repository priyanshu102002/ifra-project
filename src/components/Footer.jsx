import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <img src="../public/images/logo.png" alt="" />
            <div className="nav-links">
                <div className="categories">
                    <h4>CATEGORIES</h4>
                    <a href="#">Steel</a>
                    <a href="#">metal</a>
                    <a href="#">wood</a>
                    <a href="#">mud</a>
                </div>
                <div className="company">
                    <h4>Our company</h4>
                    <a href="#">About</a>
                </div>
                <div className="customer">
                    <h4>CUSTOMER Support</h4>
                    <h6>+9599214186</h6>
                    <h6>+9599214186</h6>
                </div>
                <div className="join">
                    <h4>Join Us</h4>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Yes, here’s my emaiil"
                        />
                        <button>&gt;</button>
                    </div>
                    <h6>ifra@gmail.com </h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
