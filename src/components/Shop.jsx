import React from "react";
import Card from "./UI/Card";

import "./Shop.css";

const Shop = () => {
    return (
        <section className="shop">
            <div className="shop-wrapper">
                <img src="../public/images/circle.svg" alt="" />
                <h3>Shop by category </h3>
                <div className="cards">
                    <div className="cards-wrapper">
                        <Card title="Jar" img="img1.jpg" />
                        <Card title="show Case" img="img2.jpg" />
                        <Card title="vase " img="img3.jpg" />
                        <Card title="table Essence" img="img4.jpg" className="center" />
                    </div>
                    <div className="cards-wrapper">
                        <Card title="Lighting " img="img1.jpg" />
                        <Card title="Wall Decor" img="img2.jpg" />
                        <Card title="Antiques" img="img3.jpg" />
                        <Card title="Jar" img="img4.jpg" className="center" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
