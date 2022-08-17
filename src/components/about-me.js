import React from "react";
import { github_icon, linkedin_icon, email_icon, mcgill_rouge } from "./icons/icons";

const social_media = () => {
    const makeSocialMedia = (id, icon, url) => {
        return (<span id={id}>
            <a href={url} target="_blank" rel="noreferrer">
                {icon}
            </a>
        </span>);
    }

    let github = makeSocialMedia("github", github_icon, "https://github.com/notkaramel");
    let linkedin = makeSocialMedia("linkedin", linkedin_icon, "https://www.linkedin.com/in/antoinephan/");
    let email = makeSocialMedia("email", email_icon, "mailto:antoine.phan@mail.mcgill.ca");

    return (
        <div className="about-me-grid-item" id="social-media">
            {github}
            {linkedin}
            {email}
        </div>
    );
}

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <h1 className="section-title" id="title">About Me</h1>
            {/* Use a flexbox */}
            <div className="about-me-grid">
                <div className="about-me-grid-item" id="name">
                    <p>👋 Hi! I'm <b>Antoine Phan</b>.</p>
                </div>
                <div className="about-me-grid-item" id="education">
                    <p>
                        {mcgill_rouge} <br />
                        <b>McGill University</b><br />
                        U1 Electrical Engineering
                    </p>
                </div>
                <div className="about-me-grid-item" id="profile-picture">
                    <img
                        src="https://avatars.githubusercontent.com/u/24505220?v=4"
                        alt="profile_pic">
                    </img>
                </div>

                <div className="about-me-grid-item" id="languages">
                    <b>🌐 Languages 🌐 </b><br />
                    <ul>
                        <li id="lang">
                            English:<br />French:<br />Vietnamese:<br />Spanish:
                        </li>
                        <li />
                        <li id="proficiency">
                            Bilingual <br />Intermediate <br /> Native <br /> Elementary
                        </li>
                    </ul>
                </div>
                {social_media()}
            </div>
        </div>
    );
}

export default AboutMe;