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
                {/* the skills-grid contains 3 sections of skills */}
                <div className="skills-grid">

                    {/* Section 1: Programming */}
                    <section className="programming">
                        <h4 className="section-title">Programming</h4>
                        {new Skill("c")}
                        {new Skill("cplusplus")}
                        {new Skill("java")}
                        {new Skill("python")}
                    </section>

                    {/* Section 2: Web development */}
                    <section className="web-development">
                        <h4 className="section-title">Web development</h4>
                        {new Skill("javascript")}
                        {new Skill("react")}
                        {new Skill("nodejs")}
                        {new Skill("sass")}
                        {new Skill("html5")}
                        {new Skill("css3")}
                        {new Skill("markdown")}
                    </section>
                    {/* Section 3: System */}
                    <section className="system">
                        <h4 className="section-title">System</h4>

                        {new Skill("git")}
                        {new Skill("github")}
                        {new Skill("bash")}
                        {new Skill("linux")}
                        {new Skill("ubuntu", true)}
                        {new Skill("raspberrypi")}
                        {new Skill("arduino")}
                    </section>
                    {/* Section 4: Design (might not include) */}
                </div>
            </div>
        );
    }
}

export default MySkills;