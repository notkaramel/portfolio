import React from "react";
import { github_icon, linkedin_icon, email_icon } from "./icons/icons";

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
    let email = makeSocialMedia("email", email_icon, "mailto:hoangtuan11102@gmail.com");

    return (
        <div className="social-media">
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
            <div className="about-me-flex">
                <img
                    className="about-me-flex-item"
                    id="profile-picture"
                    src="https://avatars.githubusercontent.com/u/24505220?v=4"
                    alt="profile_pic">
                </img>
                <div className="about-me-flex-item">
                    <p id="my-info">👋 Hi! I'm Antoine Phan.</p>
                    <p id="my-info"> 🎓 U1 Electrical Engineering @ McGill University </p>
                    <p id="my-info"> 📍 Montreal, Canada.</p>
                    {/* <p> 📈 CGPA: 3.52</p> */}
                    <p id="my-info"> <span>🌐 Languages: </span>
                        <span id="brief-info">
                            English, French, Vietnamese, Spanish
                        </span>
                        <span id="extra-info">
                            <ul>
                                <li>English: Bilingual Proficiency</li>
                                <li>French: Intermediate</li>
                                <li>Vietnamese: Native</li>
                                <li>Spanish: Newbie</li>
                            </ul>
                        </span>

                    </p>
                    <p> {social_media()} </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;