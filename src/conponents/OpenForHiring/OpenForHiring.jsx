import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class OpenForJiring extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500
    });
  }

  render() {
    return (
      <div id="Skills" className="container  " data-aos="fade-up" style={{marginTop:'-65px'}}>



        <div className="box columns is-desktop content  has-text-centered 	 is-vcentered" >
          <div className="column  ">
            <h2 className="title is-2">Open For Hiring</h2>
          </div>

          <div className="column ">
          <p >
               Interested on working together ? I am currently looking for a new
               practical training opportunity so tell me more about your project and let's start to
               build something great together.
             </p>
             </div>

          <div className="column ">
          <a
              style={{ textDecoration: "none" }}
              href="mailto:milletbard@gmail.com"
              rel="noopener noreferrer"
              className="button is-primary is-rounded is-medium hvr-grow"
            >
              <span>
                Let's Do it{/* */}
                <span
                  style={{ fontSize: "undefinedrem" }}
                  role="img"
                  aria-label="emoji"
                >
                  🤝
                </span>
              </span>
            </a>
            
          </div>
        </div>
      </div>

    );
  }
}
export default OpenForJiring;
