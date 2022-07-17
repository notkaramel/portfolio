// Main className is navbar

import React from "react";
import './scss/navbar.scss';

class NavBar extends React.Component {

    render() {
        
        return (
            <div className="navbar">
                <a className="topright" href="#home">Antoine Phan</a>
                <a className="topleft" href="#about">About Me</a>
                <a className="topleft" href="#projects">Projects</a>
                <a className="topleft" href="#skills">Skills</a>
                <a className="topleft" href="#experience">Experience</a>
                <a className="topleft" href="#citations">Citations</a>
            </div>
        );
    }
}

export default NavBar;