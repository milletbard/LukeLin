<<<<<<< HEAD
import React, { Component } from 'react';
import Layout from '../conponents/layout';

=======
import React, { Component } from "react";
import Navbar from "../conponents/Navbar/Navbar";
import Home from "../conponents/Home/Home";
import Skills from "../conponents/Skills/Skills";
import Aboutme from "../conponents/Aboutme/Aboutme";
import Footer from "../conponents/Footer/Footer";
>>>>>>> c84b1e4c51a4b99671f3331a20aa367c1db458e4

import "./App.css";
import "bulma";
import "hover.css";

//import styled from 'styled-components';

class App extends Component {
<<<<<<< HEAD

  render() {

    return (
      <Layout />
=======
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
        <Skills />
        <Aboutme />
        <Footer />
      </div>
>>>>>>> c84b1e4c51a4b99671f3331a20aa367c1db458e4
    );
  }
}

export default App;
