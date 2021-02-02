import React from "react";
import HeaderComponenet from "./Header";
import ColoredCradsComponent from "./ColoredCards";
import FooterComponent from "./Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return <div>
      <HeaderComponenet />
      <ColoredCradsComponent />
      <FooterComponent />
    </div>;
  }
}

export default App;
