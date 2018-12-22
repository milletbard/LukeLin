import React, { Component } from 'react';
import Navbar from '../conponents/Navbar/Navbar';
import './App.css'
import styled from 'styled-components';

//import styled from 'styled-components';



class App extends Component {
  state = {
    showBurger: false

  }
  toggleBurgerHandler = () => {
    const doesShow = this.state.showBurger;
    this.setState({ showBurger: !doesShow });

  }

  render() {
    const Div = styled.div`
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;

  `;
    return (
      <div>
        <Navbar
          clicked={this.toggleBurgerHandler}
          showBurger={this.state.showBurger}
        />
        <Div>

        </Div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;