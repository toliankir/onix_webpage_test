import React from "react";

export default class LargeCardComponent extends React.Component {
    render() {
        const { card } = this.props;
        return <div className="card">
        <i className={card.classes.join(" ")}></i>
        <p className="content-large">{card.title}</p>
        <p className="content-small">{card.description}</p>
    </div>
    }
}