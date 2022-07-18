import React from "react";
import './scss/navbar.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#about-me">
                        A
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#projects">
                        P
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#skills">
                        S
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#experience">
                        E
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#citations">
                        C
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#darkmode">
                        D
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;