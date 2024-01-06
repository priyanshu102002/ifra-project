import React from "react";

import "./WinterShop.css";

const WinterShop = () => {
    return (
        <section className="winter-shop">
            <h3>Winter Discount</h3>
            <div className="winter-shop-wrapper">
                <div className="btn-card-left">
                    <button>Sale</button>
                </div>
                <div className="btn-card-right">
                    <div className="card2"></div>
                    <div className="card2"></div>
                    <div className="card2"></div>
                    <div className="card2"></div>
                </div>
            </div>
        </section>
    );
};

export default WinterShop;