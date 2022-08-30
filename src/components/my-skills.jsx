import React from "react";
// Source for icons: https://devicon.dev
// Github link: https://github.com/devicons/devicon


const langIcon = (lang) => {
    const icon_link = (file) => {
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + file + "/" + file + "-original.svg";
    }

    let icon = icon_link(lang);
    return (
        <img src={icon}
            alt={lang + "-icon"}
            className="skill"
        />
    );
}

function SystemDev() {
    let systemSkills = ["linux", "bash", "raspberrypi", "arduino"]
    return (
        <div className="submodule-grid" id="system-dev">
            <div className="title">
                <p>System Development</p>
            </div>
            <div className='description'>
                I am an enthusiast on system developement with
                moderate experience in using Linux
                (<b>Debian/Ubuntu</b> and <b>Arch Linux</b>) and
                writing <b>C++/Python</b> scripts
                for <b>Arduino</b> & <b>Raspberry Pi</b > GPIO, respectively.
            </div>
            <div className="submodule-item" id="SysDevLangs">
                {systemSkills.map(lang => 
                <div key={lang}>
                    {langIcon(lang)}
                </div>
                )}
            </div>
        </div>
    );
}

function DataScience() {
    let dataSkills = ["python", "julia", "r", "matlab", "numpy", "pandas", "pytorch", "tensorflow"];
    return (
        <div className="submodule-grid" id="data-science">
            <div className="title">
                <p>Data Science</p>
            </div>
            <div className='description'>
                I self-taught data science using <b>Python</b> packages
                including <b>Numpy</b>, <b>Pandas</b>, <b>PyTorch</b>,
                and <b>TensorFlow</b>. I also have minor experience in
                using <b>R</b> and <b>Julia</b> for machine learning.
            </div>

            <div className="submodule-item" id="DataSciLangs">
                {dataSkills.map(lang => 
                <div key={lang}>
                    {langIcon(lang)}
                </div>
                )}
            </div>
        </div>
    );
}

function WebDev() {
    let webdevSkills = ["javascript", "typescript", "react", "sass", "html5", "css3", "nodejs", "markdown"];
    return (
        <div className="submodule-grid" id="web-dev">
            <div className="title">
                <p>Web Development</p>
            </div>
            <div className='description'>
                <p>
                    I enjoy building front-end web applications.
                    I have experience in <b>ReactJS</b>, <b>Node.js</b>,
                    and <b>Sass</b> from self-teaching and building apps on my own.
                </p>
            </div>

            <div className="submodule-item" id="WebDevLangs">
                {webdevSkills.map(lang =>
                <div key={lang}>
                    {langIcon(lang)}
                </div>
                )}
            </div>
        </div>
    );
}

function SoftwareDev() {
    const softwareLangs = ["c", "cplusplus", "java", "kotlin", "android", "androidstudio"]
    return (
        <div className="submodule-grid" id="system-dev">
            <div className="title">
                <p>Software Development</p>
            </div>
            <div className='description'>
                <p>
                    I have been coding <b>C</b> and <b>C++</b> for the past 5 years
                    and <b>Java</b> for 1 year. <b>Kotlin</b> and <b>Android</b> are fairly new
                    to me as I am still learning and building simple apps.
                </p>
            </div>
            <div className="submodule-item" id="SoftDevLangs">
                {softwareLangs.map(lang =>
                    <div key={lang}>
                        {langIcon(lang)}
                    </div>
                )}
            </div>
        </div>
    );
}

const MySkills = () => {
    return (
        <div className="skills" id="skills">
            <h1 className="section-title">Skills</h1>
            <div className="skills-grid">
                {SystemDev()}
                {DataScience()}
                {WebDev()}
                {SoftwareDev()}
            </div>
        </div>
    );
}

export default MySkills;