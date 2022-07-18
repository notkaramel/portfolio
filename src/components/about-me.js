import React from "react";
import './scss/about-me.scss'

const social_media = () => {
    const github_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
    const linkedin_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg";
    const email_icon = "https://upload.wikimedia.org/wikipedia/commons/5/50/TK_email_icon.svg";

    const makeSocialMedia = (id, icon, url) => {
        return (<span id={id}>
            <a href={url} target="_blank" rel="noreferrer">
                <img src={icon} alt={id + "_icon"} width="50px" />
            </a>
        </span>);
    }

    let github = makeSocialMedia("github", github_icon, "https://github.com/notkaramel");
    let linkedin = makeSocialMedia("linkedin", linkedin_icon, "https://www.linkedin.com/in/antoinephan/");
    let email = makeSocialMedia("email", email_icon, "mailto:hoangtuan11102@gmail.com");

    return (
        <div className="social-media">
            <p>
                {github}
                {linkedin}
                {email}
            </p>
        </div>
    );
}

const AboutMe = () => {
    let greeting = <p>👋 Hi! I'm Antoine Phan.</p>;
    let education = <p> 🎓 U1 Electrical Engineering @ McGill University </p>;
    let location = <p> 📍 Montreal, Canada.</p>;
    let cgpa = <p> 📈 CGPA: 3.52</p>;
    let languages = <p> 🌐 Languages: English, French, Vietnamese, Spanish</p>;
    return (
        <div className="about-me" id="about-me">
            <h1 className="section-title">~ About Me ~</h1>
            <table className="info-table">
                <tbody>
                    {/* The profile picture spans 2 rows of the table */}
                    <tr>
                        <td className="profile-pic" rowSpan={"2"}>
                            <img
                                src="https://avatars.githubusercontent.com/u/24505220?v=4"
                                alt="profile_pic">
                            </img>
                        </td>
                        <td className="info">
                            {greeting}
                            {education}
                            {location}
                            {cgpa}
                            {languages}
                            {social_media()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AboutMe;