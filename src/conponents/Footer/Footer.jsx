import React, { Component } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";
import Img from "./Img/Footer.jpg";
class Social extends Component {
  componentDidMount() {
    AOS.init({
      duration: 300
    });
  }
  render() {
    const Div = styled.div`
      color: white;
      background-image: url(${Img});
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;
      padding: 50px;
    `;
    const A = styled.a`
      margin: 10px;
    `;

   
    return (
      <Div>
        <section
          data-aos="fade-up"
          id="Content"
          className="section has-text-centered"
          style={{ backgroundImage: { Img } }}
        >
          <div className="container aos-init aos-animate">
            <h1 data-aos="zoom-in" className="title aos-init aos-animate">
              <span className="text-white">Let's get social</span>
            </h1>
            <div className="buttons is-centered">
              <a
                style={{ textDecoration: "none" }}
                className="button is-link text-white hvr-grow"
                href="https://milletbard.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i style={{ marginRight: "6px" }} className="fab fa-blogger" />
                Blog
              </a>
              <a
                style={{ textDecoration: "none" }}
                className="button is-dark text-white hvr-grow"
                href="https://github.com/milletbard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i style={{ marginRight: "6px" }} className="fab fa-github" />
                github
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div className="content has-text-centered">
            <p>
              <span role="img" aria-label="emoji">
                🤘🏼
              </span>
              <br />
              by Luke Lin
              <br />
              using
              <A
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                reactjs
              </A>
              +
              <A
                href="https://michalsnik.github.io/aos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                aos
              </A>
              +
              <A
                href="https://bulma.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                bulmsa
              </A>
              +
              <A
                href="https://www.styled-components.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                styled-components
              </A>
              <br />
              Source code on
              <A
                href="https://github.com/milletbard/LukeLin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </A>
            </p>
          </div>
        </footer>

     
      </Div>
    );
  }
}
export default Social;
