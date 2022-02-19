import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
          <BrowserRouter>
            <Navbar/>
            <Switch>

            </Switch>
            <Footer/>
          </BrowserRouter>
      </div>

    );
  }
}

export default App;
