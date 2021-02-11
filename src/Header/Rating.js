import React from "react";

export default class RatingComponenet extends React.Component {
    constructor() {
        super();
        this.state = {
            rate: 4.8,
            ratings: 1432096
        };
    }
    
    
    
    render() {
        return <div className="top-menu-rate">
        <div className="rate-logo">
            <img src={"./img/icon/wing.png"} alt="wing" />
                {this.state.rate}
            <img src={"./img/icon/wing.png"} alt="wing" />
        </div>
        {this.state.ratings}
    </div>;
    }
}