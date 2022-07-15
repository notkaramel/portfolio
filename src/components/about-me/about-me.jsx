import React from "react";

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me">
                <h1>~ ABOUT ME ~</h1>
                <div className="profile-pic">
                    <img src="src/components/images/seungheeeeee.png" alt="profile_pic"></img>
                </div>

                <div className="info">
                    <ul>
                        <li>My name is Antoine Phan.</li>
                        <li>U1 Electrical Engineering @ McGill University </li>
                        <li>Location: Montreal, Canada.</li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul>
                        <li id="github"><img src="" alt="github_logo" /></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AboutMe;