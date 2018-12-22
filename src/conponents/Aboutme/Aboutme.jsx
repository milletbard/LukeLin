import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "./img/LukeLin.JPG";

class Aboutme extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500
    });
  }

  render() {
   

    return (
      <section id="About" className="section has-text-centered">
        <div data-aos="fade-up">
          <div data-aos="fade-up" className="container aos-init aos-animate">
            <div
              className="columns is-desktop"
              style={{ alignItems: "center" }}
            >
              <div className="column">
                <figure className="image is-480x480">
                  <img className="is-rounded" alt="" src={Img} />
                </figure>
              </div>

              <div className="column">
                <h1 data-aos="zoom-in" className="title aos-init aos-animate">
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
               
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Aboutme;
