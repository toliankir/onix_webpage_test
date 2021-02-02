import React from "react";

export default class LinksMenuComponent extends React.Component {
    linksArr = [
        {
            link: "./",
            title: "Catalogus"
        },
        {
            link: "./",
            title: "Maps"
        },
        {
            link: "./",
            title: "Contacts"
        },
        {
            link: "./",
            title: "About app"
        },
        {
            link: "./",
            title: "Wallet"
        }
    ];
    
    render() {
    return <div>
        <a href={"./"} className="top-menu-title">
            <i className="fas fa-briefcase"></i>
            MAPS.ME
        </a>
        {this.linksArr.map(({link, title}, index) => <a href={link} key={index} className="top-menu-dark">{title}</a>)}
    </div>;
    }
}