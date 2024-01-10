import React from "react";

import "./Room.css";

const Room = () => {
    return (
        <section className="room">
            <h3>Browse Ideas by Room</h3>
            <div className="Card3-wrapper">
                <div className="card3">
                    <img src="/Images/living.jpg" alt="" />
                    <h4>Living</h4>
                </div>
                <div className="card3">
                    <img src="/Images/bedroom.jpg" alt="" />
                    <h4>Bedroom</h4>
                </div>
                <div className="card3">
                    <img src="/Images/entry.jpg" alt="" />
                    <h4>Entry</h4>
                </div>
                <div className="card3">
                    <img src="/Images/home.jpg" alt="" />
                    <h4>Home Office</h4>
                </div>
            </div>
        </section>
    );
};

export default Room;
