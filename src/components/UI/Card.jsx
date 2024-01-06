import React from "react";

import "./Card.css";

const Card = (props) => {
    return (
        <div className="card ">
            <img
                className={`image ${props.className}`}
                src={`../../public/images/${props.img}`}
                alt={props.alt || "card image"}
            />
            <h5>{props.title || "title"}</h5>
        </div>
    );
};

export default Card;