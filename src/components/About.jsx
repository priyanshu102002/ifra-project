import React from "react";

import "./About.css";

const About = () => {
    return (
        <div className="about">
            <h1 className="aboutUs">About Us</h1>
            <div className="about-wrapper">
                <div className="about-img">
                    <img
                        src="https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="about-img"
                    />
                </div>
                <div className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                        sit amet sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecmaximus ante.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                        sit amet sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecmaximus ante.
                    </p>
                </div>
            </div>
            <p className="about-text-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum aspernatur corporis ipsa explicabo pariatur. Eos autem sed rerum, architecto ducimus facere maiores earum quaerat officia exercitationem, perspiciatis quas illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum aspernatur corporis ipsa explicabo pariatur. Eos autem sed rerum, architecto ducimus facere maiores earum quaerat officia exercitationem, perspiciatis quas illo.</p>

            <h1>Return Policy </h1>
            <p className="about-text-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum aspernatur corporis ipsa explicabo pariatur. Eos autem sed rerum, architecto ducimus facere maiores earum quaerat officia exercitationem, perspiciatis quas illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum aspernatur corporis ipsa explicabo pariatur. Eos autem sed rerum, architecto ducimus facere maiores earum quaerat officia exercitationem, perspiciatis quas illo.</p>
        </div>
    );
};

export default About;
