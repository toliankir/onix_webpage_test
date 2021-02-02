import React from "react";

export default class SmallCardComponent extends React.Component {
    render() {
        const {card} = this.props;
        return <div className="card">
        <i className={card.classes.join(" ")}></i>
        <div>
            { card.title ? <p className="content content-large">{card.title}</p> : ""}
            { card.desciption ? <p className="content content-small">{card.desciption}</p> : ""}
            { card.link ? <a target="_blank" rel="noreferrer" href={card.link.src}>{card.link.desciption}</a> : ""}
        </div>
    </div>
    }
}