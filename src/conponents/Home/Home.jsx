import React from 'react';
import styled from 'styled-components';
import mainBGC from "./Img/Home.jpg"

const Home = () => {
    const A = styled.a`
    :hover {
      text-decoration: none;
    }
  `;
    const Header = styled.header`
    background-image: url(${mainBGC});
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  `;
    return(
        <Header>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container" style={{marginTop:'-100px'}}>
              <h2 className="subtitle text-white">HI</h2>
              <h1 className="title is-1 text-white">I'm Luke</h1>
              <h2 className="subtitle is-2 text-white">
            前端初級伐木工
              </h2>
              <A
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
        </section>
      </Header>
    )
}

export default Home;