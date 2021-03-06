import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
