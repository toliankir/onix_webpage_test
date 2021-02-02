import React from "react";
import SmallCardsComponent from "./SmallCards";
import LargeCardsComponent from "./LargeCards"

export default class MainContentComponent extends React.Component {
    render() {
        return <div className="phone container">
        <img src={"./img/phone.png"} className="phone-image" alt="Phone" />
        <img src={"./img/card.png"} className="card-image" alt="Card" />
        <h3>React Internship test task</h3>
        <p className="title">Github page: 
            <a target="_blank" rel="noreferrer" href="https://github.com/toliankir/onix_webpage_test">
                https://github.com/toliankir/onix_webpage_test
            </a>
        </p>
        <p className="title">Template source: 
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/shots/14846307-Travel-Wallet/attachments/6555773?mode=media">
                https://dribbble.com/shots/14846307-Travel-Wallet/attachments/6555773?mode=media
            </a>
        </p>
        <form>
            <p className="input-wrapper user-code">
                Country
                <input readOnly type="text" value="321" />
            </p>
            <p className="input-wrapper user-phone">
                Phone number
                <input readOnly type="text" value="123" />
            </p>
            <button>Get started</button>
        </form>
            <SmallCardsComponent />
            <LargeCardsComponent />
        </div>
    }
}