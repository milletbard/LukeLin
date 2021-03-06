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
        className="navbar  is-transparent is-fixed-top"
        style={{ backgroundColor: "#000" }}
      >
      
        <div className="navbar-brand ">
          <a href="#Home"
       >
            <img src={mainLogo} alt="" width={40} height={40} />
          </a>
        </div>
        
        <Div  className={assignedMenuClasses.join(" ")}>
          {/* <div  className=" navbar-menu is-active"> */}
              <A href="#Skills" className="navbar-item text-white hvr-grow"
                style={{ backgroundColor: "#000" }}>
                SKILLS
              </A>
              <A href="#About" className="navbar-item text-white hvr-grow "
                style={{ backgroundColor: "#000" }}>
                ABOUT
              </A>
              <A 
              href="https://github.com/milletbard"
              className="navbar-item text-white hvr-grow "
              style={{ backgroundColor: "#000" }}
              target="_blank"
              rel="noopener noreferrer">
                GITHUB
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
       

       
      </nav>

    
    </div>
  );
};

export default Navbar;
