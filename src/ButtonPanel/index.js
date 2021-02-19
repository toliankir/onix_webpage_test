import React from "react";
import "./index.css";

export default class ButtonPanel extends React.Component {

    render() {
        const {toggleColoredCards} = this.props;
        return <div className="container button-container">
            <button className="red" onClick={toggleColoredCards}>Toggle Colored Cards</button>
        </div>
    }
}