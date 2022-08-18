import React from "react";
// Source for icons: https://devicon.dev
// Github link: https://github.com/devicons/devicon

const icon_link = (file) => {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + file + "/" + file + "-original.svg";
}

const langIcon = (lang) => {
    let icon = icon_link(lang);
    return (
        <img src={icon}
            alt={lang + "-icon"}
            className="skill"
        />
    );
}

const WebDev = () => {
    let webdevSkills = ["javascript", "typescript", "react", "sass", "html5", "css3", "nodejs" , "markdown"];
    return (
        <div className="submodule-grid" id="web-dev">
            <div className="submodule-title">
                <p>Web Development</p>
            </div>
            <div className="submodule-item" id='description'>
                <p>
                    I enjoy building front-end web applications. 
                    I have experience in ReactJS, Node.js, and Sass
                    from self-teaching and building apps on my own.
                </p>
            </div>

            <div className="submodule-item">
                <p></p>
                {webdevSkills.map(lang => langIcon(lang))}
            </div>
        </div>
    );
}

const SystemDev = () => {
    let systemSkills = ["linux", "bash", "git", "ubuntu", "raspberrypi", "arduino"]
    return (
        <div className="submodule-grid" id="system-dev">
            <div className="submodule-title">
                <p>System Development</p>
            </div>
            <div className="submodule-item" id='description'>
                <p>
                    I am an enthusiast on system developement with  
                    moderate experience in using Linux 
                    (Debian/Ubuntu and Arch Linux). 
                    I also have experience in
                    writing C++ and Python scripts for Arduino and
                    Raspberry Pi GPIO, respectively.
                </p>
            </div>
            <div className="submodule-item">
                {systemSkills.map(lang => langIcon(lang))}
            </div>
        </div>
    );
}

const DataScience = () => {
    let dataSkills = ["python", "numpy", "pandas", "pytorch", "tensorflow", "julia", "r"];
    return (
        <div className="submodule-grid" id="data-science">
            <div className="submodule-title">
                <p>Data Science</p>
            </div>
            <div className="submodule-item" id='description'>
                I self-taught myself data science using Python packages
                such as Numpy, Pandas, PyTorch, and TensorFlow.
                I also have minor experience in using R to analyze data 
                for data visualization and machine learning.
            </div>

            <div className="submodule-item">
                {dataSkills.map(lang => langIcon(lang))}
            </div>
        </div>
    );
}

const SoftwareDev = () => {
    const softwareLangs = ["c", "cplusplus", "java", "kotlin"]
    return (
        <div className="submodule-grid" id="system-dev">
            <div className="submodule-title">
                <p>Software Development</p>
            </div>
            <div className="submodule-item" id='description'>
                <p>
                    I am an enthusiast on system developement with
                    moderate experience in using Linux
                    (Debian/Ubuntu and Arch Linux).
                    I also have experience in
                    writing C++ and Python scripts for Arduino and
                    Raspberry Pi GPIO, respectively.
                </p>
            </div>
            <div className="submodule-item">
                {softwareLangs.map(lang => langIcon(lang))}
            </div>
        </div>
    );
}

export default function MySkills(){
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