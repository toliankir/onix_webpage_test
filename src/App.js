import React from "react";
import HeaderComponenet from "./Header";
import ColoredCradsComponent from "./ColoredCards";
import FooterComponent from "./Footer";
import NeededComponent from "./Needed";
import "./App.css";
import MainContentComponent from "./MainContent";
import ButtonPanel from "./ButtonPanel";
import ArrayTaskComponenet from "./ArrayTask";

class App extends React.Component {
  state = {
    showColoredCards: true
  }

  toggleColoredCards() {
    this.setState({
      showColoredCards: !this.state.showColoredCards
    });
    console.log(`Toggle Colored Cards: ${this.state.showColoredCards ? "hide" : "show" }`);
  }

  render() {
    let coloredCard = <ColoredCradsComponent />
    const { showColoredCards } = this.state;
    if (!showColoredCards) {
      coloredCard = <div className="container info-container">
          <p>
            You may tour on Colored Cards Component by click on button "Toggle Colored Cards"
          </p>
        </div>
    }
    return <div className="main-container">
      <HeaderComponenet />
      <MainContentComponent />
      <ArrayTaskComponenet />
      <ButtonPanel toggleColoredCards={this.toggleColoredCards.bind(this)} />
      {coloredCard}
      <NeededComponent />
      <FooterComponent />
    </div>;
  }
}

export default App;
