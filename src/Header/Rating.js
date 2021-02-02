import React from "react";

export default class RatingComponenet extends React.Component {
    rate = 4.8;
    
    render() {
        return <div className="top-menu-rate">
        <div className="rate-logo">
            <img src={"./img/icon/wing.png"} alt="wing" />
                {this.rate}
            <img src={"./img/icon/wing.png"} alt="wing" />
        </div>
        1432096 RATINGS
    </div>;
    }
}