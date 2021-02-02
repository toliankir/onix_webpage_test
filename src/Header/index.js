import React from "react";
import LinksMenuComponent from "./LinksMenu";
import SocialMenuComponenet from "./SocialMenu";
import RatingComponenet from "./Rating";
import "./index.css";

export default class HeaderComponenet extends React.Component {
   render() {
       return <header>
            <div className="top-menu">
                <LinksMenuComponent />
                <SocialMenuComponenet />
            </div>
            <RatingComponenet />
    </header>;
   }
}