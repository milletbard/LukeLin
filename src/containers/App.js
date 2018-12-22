import React, { Component } from "react";
import Navbar from "../conponents/Navbar/Navbar";
import Home from "../conponents/Home/Home";
import OpenForHiring from "../conponents/OpenForHiring/OpenForHiring";
import Skills from "../conponents/Skills/Skills";
import Aboutme from "../conponents/Aboutme/Aboutme";
import Footer from "../conponents/Footer/Footer";

import "./App.css";
import "bulma";
import "hover.css";

//import styled from 'styled-components';

class App extends Component {
  state = {
    showBurger: false
  };
  toggleBurgerHandler = e => {
    const doesShow = this.state.showBurger;
    this.setState({ showBurger: !doesShow });
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div>
        <Navbar
          clicked={this.toggleBurgerHandler}
          showBurger={this.state.showBurger}
        />
        <Home />
        <OpenForHiring />
        <Skills />
        <Aboutme />
        <Footer />
      </div>
    );
  }
}

export default App;
