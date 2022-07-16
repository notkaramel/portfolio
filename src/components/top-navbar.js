// Main className is topnav

import React from "react";
import './css/top-navbar.css';

class NavBar extends React.Component {

    render() {
        
        return (
            <div className="navbar">
                <a className="topright" href="#root">Antoine Phan</a>
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