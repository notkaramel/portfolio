import React from "react";
import './css/my-skills.css';
// Source for icons: https://devicon.dev
// Github link: https://github.com/devicons/devicon

const icon_link = (file) => {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + file + "/" + file + "-original.svg";
}

const plain_icon_link = (file) => {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + file + "/" + file + "-plain.svg";
}

class Skill {
    constructor(skill,need_plain) {
        this.skill = skill;
        this.icon = need_plain ? plain_icon_link(skill) : icon_link(skill);
        return (
            <p className="skill-icon">
                <img src={this.icon}
                    width="50px"
                    alt={this.skill + "-icon"}
                />
                {this.skill}!
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
            <div className="my-skills" id="skills">
                <h1 className="section-title">~ Skills ~</h1>
                {new Skill("c")}
                {new Skill("cplusplus")}
                {new Skill("java")}
                
                {new Skill("python")}
                {new Skill("numpy")}
                
                {new Skill("html5")}
                {new Skill("css3")}
                {new Skill ("sass")}
                {new Skill("markdown")}
                {new Skill("javascript")}
                {new Skill("react")}

                {new Skill("nodejs")}
                {/* Need to get plain icon instead */}

                {new Skill("vscode")}
                {new Skill("vim")}
                {new Skill("bash")}
                {new Skill("linux")}
                {new Skill("ubuntu",true)}
                {new Skill("aarch64")}
                {new Skill("arduino")}
                {new Skill("raspberrypi")}
                
                {new Skill("git")}
                {new Skill("github")}
                {new Skill("illustrator",true)}
            </div>
        );
    }
}

export default MySkills;