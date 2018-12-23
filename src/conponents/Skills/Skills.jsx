import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

class Skills extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500
    });
  }
  render() {
    const Section = styled.section`
      margin-top: 20px;
    `;

    return (
      <section className="section">
        <div className="container">

          <div className="columns  is-vcentered">
            <div
              data-aos="zoom-in-right"
              className="column aos-init aos-animate"
            >
              <h1 data-aos="zoom-in" className="title aos-init aos-animate">
                <span>Skills</span>
              </h1>
              <p>
                From the time I started my studies as web developer on late 2017
                I have been experimenting with UI/UX trying to bring great
                ideas, passion and quality to what I code. However that it is
                not an easy job so I try my best to improve my skills being an
                Medium bookworm and doing some course once in a while.
              </p>
            </div>

            <div data-aos="zoom-in-left" className="column  aos-animate">
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content has-text-centered">
                      <span
                        style={{ fontSize: "2.5rem" }}
                        role="img"
                        aria-label="emoji"
                      >
                        👨‍💻
                      </span>
                      <h2 className="is-2">Front-End Development</h2>

                      <Section>
                        <h4 className="is-4">Languages I Speak:</h4>
                        <div className="tags is-centered">
                          <span className="tag">HTML</span>
                          <span className="tag">CSS</span>
                          <span className="tag">SASS</span>
                          <span className="tag">JS (ES6)</span>
                        </div>
                      </Section>
                      <Section>
                        <h4 className="is-4">Development Tools:</h4>
                        <div className="tags is-centered">
                          <span className="tag">BITBUCKET</span>
                          <span className="tag">SOURCETREE</span>
                          <span className="tag">GIT</span>
                          <span className="tag">DESKTOP</span>
                          <span className="tag">NPM</span>
                          <span className="tag">VSCODE</span>
                        </div>
                      </Section>
                      <Section>
                        <h4 className="is-4">Frameworks:</h4>
                        <div className="tags is-centered">
                          <span className="tag">REACT</span>
                          <span className="tag">STYLED COMPONENTS</span>
                          <span className="tag">BULMA</span>
                          <span className="tag">BOOTSTRAP</span>
                        </div>
                      </Section>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;

// <div className="box container">
//   <div className="level row">
//     <div className="col-lg-6 col-md-12">
//       <h2 className="title">Skills</h2>
//       <p className="">
//         From the time I started my career as web developer on late 2016 I
//         have been experimenting with UI trying to bring great ideas, passion
//         and quality to what I code. However that it is not an easy job so I
//         try my best to improve my skills being an Medium bookworm and doing
//         some course once in a while.
//       </p>
//     </div>

//     <div className="col-lg-6 col-md-12" />

//   </div>
//   👨‍💻 Front-End Development As a Front-End Developer, I have been enjoying
//   bringing design concepts to life through HTML/CSS & JS technologies.
//   Placing special attention on mobile friendly and pixel perfect
//   development. Languages I Speak: HTML CSS SASS JS (ES6) JSP JAVA TYPESCRIPT
//   Development Tools: BITBUCKET SOURCETREE GIT JIRA NPM VSCODE ZEPLIN
//   Frameworks: REACT GATSBY BULMA
// </div>
