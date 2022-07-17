import React from "react";
import './scss/about-me.scss'
const github_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
const linkedin_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me" id="about-me">
                <div className="section-title"></div>
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
                            <p> 👋 Hi! I'm Antoine Phan.</p>
                            <p> 🎓 U1 Electrical Engineering @ McGill University </p>
                            <p> 📍 Montreal, Canada.</p>
                            <p> 4️⃣ CGPA: 3.52</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="social-media">
                            <p>
                                <span id="github">
                                    <a href="https://github.com/notkaramel" target="_blank" rel="noreferrer">
                                        <img src={github_icon} alt="github_icon" width="50px" />
                                    </a>
                                </span>
                                <span id="linkedin">
                                    <a href="https://www.linkedin.com/in/antoinephan/" target={"_blank"} rel={"noreferrer"}>
                                        <img src={linkedin_icon} alt="linkedin_icon" width="50px" />
                                    </a>
                                </span>
                                <span id="email">
                                    <a href="mailto:hoangtuan11102@gmail.com">
                                        <img src="https://img.icons8.com/color/48/000000/email.png" alt="email_icon" width="50px" />
                                    </a>
                                </span>
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AboutMe;