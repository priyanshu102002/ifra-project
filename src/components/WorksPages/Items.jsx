import React from "react";
import "./Items.css";

const Items = (props) => {
    return (
        <div className={`Items ${props.classname}`}>
            <img src={props.img} />
            <div className="text">
                <h4>{props.subtitle}</h4>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default Items;
