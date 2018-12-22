import React from 'react';
import 'bulma';
import 'hover.css'
import mainLogo from '../Navbar/NavbarIcon.png';
import styled from 'styled-components'


const Navbar = (props) => {
    const assignedClasses = ['navbar-menu'];
    let burgerClass = '';
    if (props.showBurger) {
        burgerClass = 'is-active';

    }
    assignedClasses.push(burgerClass);



    const Styled_a = styled.a`
    text-decoration:none;
`


    // style = "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 0; transition: opacity 0.5s ease 0.5s;" >
    const Styled_Section = styled.section`
`;
    return (
        <div>
            <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={mainLogo} alt="" width={30} height={100} ></img>
                    </a>
                </div>
                <a role="button" onClick={props.clicked} href="/" className="navbar-burger burger " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
                {/* //is-active */}
                <div id="navbarBasicExample" className={assignedClasses.join(' ')}>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a href="/" className="navbar-item"> Skills </a>
                            <a href="/" className="navbar-item"> Work </a>
                            <a href="/" className="navbar-item"> Ablut </a>
                            <a href="/" className="navbar-item"> Content </a>
                        </div>
                    </div>
                </div>

            </nav>
            <header>
                <section id="home" className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h2 className="subtitle">Hi</h2>
                            <h1 className="title is-1">I'm Luke</h1>
                            <h2 className="subtitle is-2">A Front-End Developer</h2>
                            <Styled_a
                                href="mailto:milletbard@gmail.com" rel="noopener noreferrer"
                                className="button is-primary is-rounded is-medium hvr-grow">
                                <span>Hire me{/* */}
                                    <span style={{ fontSize: 'undefinedrem' }} role="img" aria-label="emoji">🤝</span>
                                </span>
                            </Styled_a>

                        </div>

                    </div>
                </section>




            </header>
            <div className="card" style={{ margin: '0 200px' }}>
                <div className="card-body container">
                    <div className="row level">
                        <div className="level-item col-lg-4 col-md-12">
                            <h2 className="card-title">Open For Hiring</h2>
                        </div>
                        <div className="level-item col-lg-4 col-md-12">
                            <p className="text-center"> Interested on working together ? I am currently looking for a new adventure so tell me more about your project and let's start to build something great together.</p>
                        </div>
                        <div className="level-item col-lg-4 col-md-12">
                            <Styled_a
                                href="mailto:milletbard@gmail.com" rel="noopener noreferrer"
                                className="text-center button is-primary is-rounded is-medium hvr-grow">
                                <span>Hire me{/* */}
                                    <span style={{ fontSize: 'undefinedrem' }} role="img" aria-label="emoji">🤝</span>
                                </span>
                            </Styled_a>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    )
}


export default Navbar;