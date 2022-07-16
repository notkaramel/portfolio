import React from "react";
import './css/about-me.css'
const github_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
const linkedin_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me">
                <h1>~ ABOUT ME ~</h1>
                <div className="profile-pic">
                    <img
                        src="https://avatars.githubusercontent.com/u/24505220?v=4"
                        alt="profile_pic">
                    </img>
                </div>

                <div className="info">
                    <ul>
                        <li> 👋 Hi! I'm Antoine Phan.</li>
                        <li> 🎓 U1 Electrical Engineering @ McGill University </li>
                        <li> 📍 Montreal, Canada.</li>
                        <li> 4️⃣ CGPA: 3.52</li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul>
                        <li id="github">
                            <a href="https://github.com/notkaramel" target="_blank" rel="noreferrer">
                                <img src={github_icon} alt="github_icon" width="50px"/>
                            </a>
                        </li>
                        <li id="linkedin">
                            <a href="https://www.linkedin.com/in/antoinephan/" target={"_blank"} rel={"noreferrer"}>
                                <img src={linkedin_icon} alt="linkedin_icon" width="50px" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AboutMe;