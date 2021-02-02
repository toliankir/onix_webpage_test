import React from "react";
import LargeCardComponent from "./LargeCard";

export default class LargeCardsComponent extends React.Component {
cards = [
    {
        classes: ["far", "fa-user", "bg-yellow"],
        title: "100+ million",
        description: "customers"
    },
    {
        classes: ["fas", "fa-globe-asia", "bg-pink"],
        title: "70+",
        description: "Countries"
    },
    {
        classes: ["fas", "fa-comment-alt", "bg-purple"],
        title: "1.5 million",
        description: "Appstore reviews"
    },
    {
        classes: ["fas", "fa-plus-circle", "bg-red"],
        title: "Made in",
        description: "Switzerland"
    }
]

render() {
    return <div className="large-cards">
        { this.cards.map((card, index) => <LargeCardComponent key={index} card={card} />) }
</div>
}

}