import React from "react";

export default class SocialMenuComponenet extends React.Component {
    socialArr = [
        {
            rating: 750432,
            link: "./",
            classes: [
                "fab",
                "fa-facebook-f"
            ]
        },
        {
            rating: 610432,
            link: "./",
            classes: [
                "fab",
                "fa-twitter"
            ]
        },
        {
            rating: 43544,
            link: "./",
            classes: [
                "fab",
                "fa-instagram"
            ]
        }
    ];
    render() {
    return <div>
        {
            this.socialArr.map(({rating, link, classes}, index) => {
                return (<a href={link} key={index} className="top-menu-social">
                <i className={classes.join(' ')}></i>
                {rating}
            </a>)
            })
        }
    </div>;
    }
}