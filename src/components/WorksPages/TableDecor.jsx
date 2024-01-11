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
        img: "https://images.unsplash.com/photo-1704795170536-e656327afea4?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        subtitle: "camel tea light",
        description:
            "Introducing Our Elephant Tea Light: Illuminate with Elegance and Whimsy Embrace the enchantment of our Elephant Tea Light, where functionality meets artistry in the most delightful way. This adorable tea light holder is more than just a luminous accessory; it's a conversation starter, an embodiment of craftsmanship, and a touch of wildlife magic for your home.",
    },
    {
        img: "https://images.unsplash.com/photo-1704795170536-e656327afea4?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        subtitle: "camel tea light",
        description:
            "Introducing Our Elephant Tea Light: Illuminate with Elegance and Whimsy Embrace the enchantment of our Elephant Tea Light, where functionality meets artistry in the most delightful way. This adorable tea light holder is more than just a luminous accessory; it's a conversation starter, an embodiment of craftsmanship, and a touch of wildlife magic for your home.",
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
                {items.map((item, index) => <Items key={index} img={item.img} subtitle={item.subtitle} description={item.description} classname={index % 2 !== 0 ? 'reverse' : ''} />)}
            </div>
            <button className="tableDecor-btn">Connect with us</button>
        </section>
    );
};

export default TableDecor;
