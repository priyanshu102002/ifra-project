import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="navbar">
                    <Link to="/shops">Shop</Link>
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src="./Images/logo.png" alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link to="#">Sign in</Link>
                    <Link to="#">Contact Us</Link>
                    <div className="links-cart">
                        <svg
                            width="30"
                            height="23"
                            viewBox="0 0 30 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.4167 20.7167C21.8808 20.7167 22.3259 20.5787 22.6541 20.3329C22.9823 20.0872 23.1667 19.7539 23.1667 19.4064C23.1667 19.0589 22.9823 18.7256 22.6541 18.4799C22.3259 18.2342 21.8808 18.0961 21.4167 18.0961C20.9525 18.0961 20.5074 18.2342 20.1792 18.4799C19.851 18.7256 19.6667 19.0589 19.6667 19.4064C19.6667 19.7539 19.851 20.0872 20.1792 20.3329C20.5074 20.5787 20.9525 20.7167 21.4167 20.7167ZM9.75 20.7167C10.2141 20.7167 10.6592 20.5787 10.9874 20.3329C11.3156 20.0872 11.5 19.7539 11.5 19.4064C11.5 19.0589 11.3156 18.7256 10.9874 18.4799C10.6592 18.2342 10.2141 18.0961 9.75 18.0961C9.28587 18.0961 8.84075 18.2342 8.51256 18.4799C8.18437 18.7256 8 19.0589 8 19.4064C8 19.7539 8.18437 20.0872 8.51256 20.3329C8.84075 20.5787 9.28587 20.7167 9.75 20.7167Z"
                                fill="#111111"
                                stroke="#111111"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.2 3.46642H29L26.2 17.0317M5.2 3.46642L8 17.0317H26.2M5.2 3.46642C4.9662 2.64387 3.8 1 1 1M26.2 17.0317H5.522C3.0244 17.0317 1.7 17.9949 1.7 19.4982C1.7 21.0015 3.0244 21.9646 5.522 21.9646H25.5"
                                stroke="#111111"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <Link to="#">Cart</Link>
                    </div>
                </div>
            </div>
            <div className="search-wrapper">
                <div className="search-bar">
                    <input type="text" placeholder="Search for Item" />
                    <svg
                        width="28"
                        height="23"
                        viewBox="0 0 28 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.5 17.5C14.4416 17.5 18.5 13.7225 18.5 9C18.5 4.27746 14.4416 0.5 9.5 0.5C4.55843 0.5 0.5 4.27746 0.5 9C0.5 13.7225 4.55843 17.5 9.5 17.5Z"
                            stroke="#F12525"
                        />
                        <line
                            x1="17.3123"
                            y1="14.6096"
                            x2="27.3123"
                            y2="22.6096"
                            stroke="#F12525"
                        />
                    </svg>
                </div>
            </div>

            <div className="navlinks">
                <Link to="#">New Arrival</Link>
                <Link to="#">Metal</Link>
                <Link to="#">Mud</Link>
                <Link to="#">wood</Link>
                <Link to="#">steel</Link>
            </div>
        </nav>
    );
};

export default Navbar;
