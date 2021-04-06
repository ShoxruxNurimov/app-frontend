import React, { Component } from "react";
import { Button, HomePage, TradePage } from "../components";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/tarde" component={TradePage} />
      </div>
    );
  }
}

export default App;
