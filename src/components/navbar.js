import React from "react";
import './scss/navbar.sass';
import { about_me_icon, projects_icon, skills_icon, music_icon, experience_icon, darkmode_icon } from "./icons/icons";

const NavBar = () => {
    
    
    let span = (name)=><span className="link-text">{name}</span>;

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
                    <a href="#skills" className="nav-link">
                        {skills_icon}
                        {span("Skills")}
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#experience" className="nav-link">
                        {experience_icon}
                        {span("Experience")}
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#side-projects" className="nav-link">
                        {music_icon}
                        {span("Side Projects")}
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#darkmode">
                        {darkmode_icon}
                        {span("Darkmode")}
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;