import React from "react";
import "./index.css"
import SmallCardComponent from "./SmallCard";

export default class SmallCardsComponent extends React.Component {
    cards = [
        {
            title: "Github page",
            link: {
                title: "Go to github page &gt;&gt;&gt;",
                src: "https://github.com/toliankir/onix_webpage_test"
            },
            description: null,
            classes: ["fab", "fa-github-alt", "bg-green"]
        },
        {
            title: "Open an accaunt in minutes",
            link: null,
            description: null,
            classes: ["fas", "fa-clock", "bg-green"]
        },
        {
            title: "Bank-level security",
            link: null,
            description: "PCI DSS required",
            classes: ["fas", "fa-lock", "bg-purple"]
        },
    ];

    render() {
        return <div className="small-cards">
            { this.cards.map((card, index) => <SmallCardComponent key={index} card={card}/>) }
        </div>}
}