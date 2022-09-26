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
    let systemSkills = ["linux", "bash", "raspberrypi"]
    return (
        <div className="submodule-grid" id="system-dev">
            <div className="title">
                <p>System Development</p>
            </div>
            <div className='description'>
                I am enthusiastic about system developement with
                much experience using Linux 
                (<b>Ubuntu/Raspbian</b> and <b>Arch Linux</b>) and
                writing <b>Python</b> scripts to experiment with <b>Raspberry Pi</b>'s GPIO
                and simple circuits involving ICs, LEDs, transistors, and segment displays.
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
    // let dataSkills = ["python", "julia", "r", "matlab", "numpy", "pandas", "pytorch", "tensorflow"];
    let dataSkills = ["python", "numpy", "pandas"];

    return (
        <div className="submodule-grid" id="data-science">
            <div className="title">
                <p>Data Science</p>
            </div>
            <div className='description'>
                I self-taught data science from <a href="https://www.kaggle.com">kaggle.com</a> using 
                <b> Python</b> packages such as <b>numpy</b> and <b>pandas</b>. Although I still have
                a lot to learn, I am confident in my ability to study new knowledge efficiently.
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
    let webdevSkills = ["react", "sass", "markdown", "javascript", "css3", "html5"];
    return (
        <div className="submodule-grid" id="web-dev">
            <div className="title">
                <p>Web Development</p>
            </div>
            <div className='description'>
                <p>
                    I enjoy building front-end web applications.
                    I have experience in <b>ReactJS</b> and <b>SASS</b> from
                    self-teaching and building this portfolio on my free time.
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
    const softwareLangs = ["c", "cplusplus", "python", "java", "git"]
    return (
        <div className="submodule-grid" id="system-dev">
            <div className="title">
                <p>Software Development</p>
            </div>
            <div className='description'>
                <p>
                    I have been coding in <b>C</b> and <b>C++</b> for the past five years
                    to study and solve problems in competitive programming.
                    I have also coded using <b>Python</b> and <b>Java</b> for
                    more than one year. For version control, I frequently use <b>Git</b>.
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