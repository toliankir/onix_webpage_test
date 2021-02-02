import React from "react";

export default class ColoredCardComponent extends React.Component {
    
    getClasses(className) {
        return ["card", className].join(" ");
    }
    
    getImageLink(imageSrc) {
        return new URL(`${window.location}/img/icon/${imageSrc}`);
    }

    render() {
        const { card } = this.props;
    return <div className={this.getClasses(card.class)}>
        <img src={this.getImageLink(card.image.src)} alt={card.image.desc} />
        <p className="content-large">{card.title}</p>
        <p className="content-small">{card.content}</p>                
    </div>;
    }
}
