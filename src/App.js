import React from "react";
import HeaderComponenet from "./Header";
import ColoredCradsComponent from "./ColoredCards";
import FooterComponent from "./Footer";
import NeededComponent from "./Needed";
import "./App.css";

class App extends React.Component {
  render() {
    return <div class="main-container">
      <HeaderComponenet />
      <ColoredCradsComponent />
      <NeededComponent />
      <FooterComponent />
    </div>;
  }
}

export default App;
