import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "./img/LukeLin.JPG";
import styled from "styled-components";

class Aboutme extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500
    });
  }

  render() {
   
    const A = styled.a`
    margin-top:20px;
    :hover {
      text-decoration: none;
    }
  `;
    return (
      <section id="About" className="section has-text-centered">
        <div data-aos="fade-up">
          <div data-aos="fade-up" className="container aos-init aos-animate">
            <div
              className="columns  is-vcentered"
              
            >
              <div className="column">

                <figure className="image is-480x480" >
                  <img  data-aos="zoom-in" className="aos-init aos-animate is-rounded" alt="" src={Img} />
                </figure>
              </div>

              <div className="column data-aos-anchor"  data-aos="zoom-in">
                <h1 className="title ">
                  <span>About me</span>
                </h1>
                <p>
                  林建成 / Luke Lin , ID `milletbard`
                </p>
                <p>
                  朝陽科大資訊工程系四年級
                </p>
                <p>
                  役畢
                </p>
                
                <A  data-aos="zoom-in-left"
                href="mailto:milletbard@gmail.com"
                rel="noopener noreferrer"
                className="button is-primary is-rounded is-medium hvr-grow"
              >
                <span>
                  Hire me{/* */}
                  <span
                    style={{ fontSize: "undefinedrem" }}
                    role="img"
                    aria-label="emoji"
                  >
                    🤝
                  </span>
                </span>
              </A>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Aboutme;
