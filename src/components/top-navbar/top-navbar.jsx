// Main className is topnav

import React from "react";
import './top-navbar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="topright" href=".">Antoine Phan</a>

                <a className="topleft" href="#about">About Me</a>
                <a className="topleft" href="#skills">Skills</a>
                <a className="topleft" href="#projects">Projects</a>
            </div>
        );
    }
}

export default NavBar;