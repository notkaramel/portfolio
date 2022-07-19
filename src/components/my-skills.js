import React from "react";
import './scss/my-skills.scss';
// Source for icons: https://devicon.dev
// Github link: https://github.com/devicons/devicon

const icon_link = (file) => {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + file + "/" + file + "-original.svg";
}

const plain_icon_link = (file) => {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + file + "/" + file + "-plain.svg";
}

class Skill {
    constructor(skill, need_plain) {
        this.skill = skill;
        this.icon = need_plain ? plain_icon_link(skill) : icon_link(skill);
        return (
            // skill = skill-flex-flex-item
            <p className="skill">
                <img src={this.icon}
                    width="50px"
                    alt={this.skill + "-icon"}
                />
                <br />
                {this.skill.toUpperCase()}
            </p>
        );

    }
}

class MySkills extends React.Component {
    render() {
        // let skills_list = ["bash", "java", "linux"];
        // let all_post = new Skill;
        // let post = () => {
        //     for (const myskill of skills_list) {
        //         all_post.push(new Skill(myskill));
        //     }
        // }

        return (
            <div className="skills" id="skills">
                <h1 className="section-title">~ Skills ~</h1>
                {/* the skills-flex contains 3 sections of skills-flex-flex */}
                <div className="skills-flex">
                    {/* Section 1: Programming */}
                    <div className="skills-flex-item">
                        <p className="skills-flex-item-title">Programming</p>
                        <div className="skills-flex-flex">
                            {new Skill("c")}
                            {new Skill("cplusplus")}
                            {new Skill("java")}
                            {new Skill("csharp")}
                            {new Skill("python")}
                            {new Skill("numpy")}
                        </div>
                    </div>
                    {/* Section 2: Web development */}
                    <div className="skills-flex-item">
                        <p className="skills-flex-item-title">Web development</p>
                        <div className="skills-flex-flex">
                            {new Skill("javascript")}
                            {new Skill("react")}
                            {/* {new Skill("nodejs")} */}
                            {new Skill("sass")}
                            {new Skill("html5")}
                            {new Skill("css3")}
                            {new Skill("markdown")}
                        </div>
                    </div>
                    {/* Section 3: System */}
                    <div className="skills-flex-item">
                        <p className="skills-flex-item-title">System</p>
                        <div className="skills-flex-flex">
                            {new Skill("git")}
                            {/* {new Skill("github")} */}
                            {new Skill("bash")}
                            {new Skill("linux")}
                            {new Skill("ubuntu", true)}
                            {new Skill("raspberrypi")}
                            {new Skill("arduino")}
                        </div>
                    </div>
                    {/* Section 4: Design (might not include) */}
                </div>
            </div>
        );
    }
}

export default MySkills;