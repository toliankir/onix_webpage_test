import React from "react";
import HeaderComponenet from "./Header";
import ColoredCradsComponent from "./ColoredCards";
import FooterComponent from "./Footer";
import NeededComponent from "./Needed";
import "./App.css";
import MainContentComponent from "./MainContent";

class App extends React.Component {
  render() {
    return <div className="main-container">
      <HeaderComponenet />
      <MainContentComponent />
      <ColoredCradsComponent />
      <NeededComponent />
      <FooterComponent />
    </div>;
  }
}

export default App;
