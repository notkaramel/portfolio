import React from "react";
import './scss/navbar.sass';
import { about_me_icon, projects_icon, skills_icon, music_icon, experience_icon, darkmode_icon } from "./icons/icons";

const NavBar = () => {
    let span = (name)=><span className="link-text">{name}</span>;
    // const darkmode_button = document.getElementById('darkmode-button');
    // darkmode_button.addEventListener('click', () => {
    //     let body = document.getElementsByTagName('body')[0];
    //     if (body.classList.contains('dark')) {
    //         body.classList.replace('light', 'dark');
    //     } else {
    //         body.classList.replace('dark', 'light');
    //     }
    // });

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#about-me" className="nav-link">
                        {about_me_icon}
                        {span("About me")}
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className="nav-link">
                        {projects_icon}
                        {span("Projects")}
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#skills" className="nav-link"z>
                        {skills_icon}
                        {span("Skills")}
                    </a>
                </li>
                {/* <li className="navbar-item">
                    <a href="#experience" className="nav-link">
                        {experience_icon}
                        {span("Experience")}
                    </a>
                </li> */}
                {/* <li className="navbar-item">
                    <a href="#side-projects" className="nav-link">
                        {music_icon}
                        {span("Side Projects")}
                    </a>
                </li> */}
                {/* <li className="navbar-item" id="darkmode-button">
                    <a href="#darkmode">
                        {darkmode_icon}
                        {span("Darkmode")}
                    </a>
                </li> */}
            </ul>
        </nav>
    );
}

export default NavBar;