import React from "react";
import mainLogo from "../Navbar/img/NavbarIcon.png";
import styled from "styled-components";

const Navbar = props => {
  const assignedBurgerClasses = ["navbar-burger", "burger"];
  const assignedMenuClasses = ["navbar-menu"];
  let burgerClass = "";
  if (props.showBurger) {
    burgerClass = "is-active";
    assignedBurgerClasses.push(burgerClass);
    assignedMenuClasses.push(burgerClass);
  }

 
  const A = styled.a`
    :hover {
      text-decoration: none;
    }
  `;

const Div = styled.div`
    background-color:black;
`;

  return (
    <div id="Navbar">
    
      <nav
        className="navbar level is-transparent is-fixed-top"
        style={{ backgroundColor: "#000" }}
      >
      
        <div className="navbar-brand ">
          <a href="/">
            <img src={mainLogo} alt="" width={40} height={40} />
          </a>
        </div>
        
        <Div  className={assignedMenuClasses.join(" ")}>
          {/* <div  className=" navbar-menu is-active"> */}
              <A href="#Skills" className="navbar-item text-white hvr-grow">
                Skills
              </A>
              <A href="#About" className="navbar-item text-white hvr-grow ">
                About
              </A>
              <A href="#About" className="navbar-item text-white hvr-grow ">
                Content
              </A>
        </Div>


        <div
          onClick={e => props.clicked(e)}
          className={assignedBurgerClasses.join(" ")}
          data-target="navbarExampleTransparentExample"
        >
          <span className="text-white" />
          <span className="text-white" />
          <span className="text-white" />
        </div>
       



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
      </nav>

    
    </div>
  );
};

export default Navbar;
