import LinksMenuComponent from "./LinksMenu";
import SocialMenuComponenet from "./SocialMenu";
import RatingComponenet from "./Rating";
import './index.css';


export default function HeaderComponenet() {
    return (<header>
            <div className="top-menu">
                <LinksMenuComponent />
                <SocialMenuComponenet />
            </div>
            <RatingComponenet />
    </header>
    );
}