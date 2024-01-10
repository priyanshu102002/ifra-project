import React from "react";
import "./TableDecor.css";
import Items from "./Items";

const items = [
    {
        img: "https://images.unsplash.com/photo-1704841632563-b40ffa74ae09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        subtitle: "elephant tea light",
        description:
            "Embrace the enchantment of our Elephant Tea Light, where functionality meets artistry in the most delightful way. This adorable tea light holder is more than just a luminous accessory; it's a conversation starter, an embodiment of craftsmanship, and a touch of wildlife magic for your home.",
    },
    {
        img: "https://images.unsplash.com/photo-1682686580950-960d1d513532?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        subtitle: " camel tea light ",
        description:
            "Introducing Our Elephant Tea Light: Illuminate with Elegance and Whimsy Embrace the enchantment of our Elephant Tea Light, where functionality meets artistry in the most delightful way. This adorable tea light holder is more than just a luminous accessory; it's a conversation starter, an embodiment of craftsmanship, and a touch of wildlife magic for your home.",
    },
];

const TableDecor = () => {
    return (
        <section className="tableDecor-wrapper">
            <h2>table Decor </h2>
            <div className="tableDecor-container">
                <Items
                    img={items[0].img}
                    subtitle={items[0].subtitle}
                    description={items[0].description}
                />
                {/* For item to reverse pass the classname to reverse */}
                <Items
                    img={items[1].img}
                    subtitle={items[1].subtitle}
                    description={items[1].description}
                    classname="reverse"
                />
                <Items
                    img={items[0].img}
                    subtitle={items[0].subtitle}
                    description={items[0].description}
                />
                <Items
                    img={items[1].img}
                    subtitle={items[1].subtitle}
                    description={items[1].description}
                    classname="reverse"
                />
            </div>
            <button className="tableDecor-btn">Connect with us</button>
        </section>
    );
};

export default TableDecor;
