import React from "react";

// Source for icons: https://devicon.dev
// Github link: https://github.com/devicons/devicon

const icon_link = (file) => {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + file + "/" + file + "-original.svg";
}

class Skill {
    constructor(skill) {
        this.skill = skill;
        try {
            this.icon = icon_link(skill);
        } catch {
            console.log("no image for " + skill + "!");
        }

        return (
            <p>
                <img src={icon_link(skill)}
                    width="50px"
                    alt={this.skill + "-icon"}
                />
                I'm good at {this.skill}!
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
            <div className="my-skills">
                <h1>~ Skills ~</h1>
                {new Skill("c")}
                {new Skill("cplusplus")}
                {new Skill("python")}
                {new Skill("java")}
                {new Skill("bash")}
                {new Skill("linux")}
                {new Skill("html5")}
                {new Skill("css3")}
                {new Skill("aarch64")}
                {new Skill("arduino")}
                {new Skill("github")}
            </div>
        );
    }
}

export default MySkills;