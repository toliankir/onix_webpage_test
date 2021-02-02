import React from "react";
import "./index.css";

export default class FooterComponent extends React.Component {
    render() {
        return <footer className="footer">
        <div className="container">
            <p className="footer-title">React Internship test task</p>
            <p className="footer-copy">Anatoliy Vasilev</p>
        </div>
    </footer>;
    }
}