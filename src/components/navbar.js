import React from "react";
import './scss/navbar.scss';

class NavBar extends React.Component {

    render() {

        return (
            <div className="navbar">
                <div className="topright">
                    <a className="topright" href="#about-me">Antoine Phan</a>
                </div>
                <div className="topleft">
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#citations">Citations</a>
                </div>
            </div>
        );
    }
}

export default NavBar;