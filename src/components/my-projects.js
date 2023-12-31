import React from "react";
import { github_icon, linkto_icon } from "./icons/icons";

class MyProjects extends React.Component {
    render() {
        // let WebTutor = new Project("web_tutorial_b0k32a", "https://github.com/notkaramel/web_tutorial_B0K32A");
        // WebTutor.setLink("https://b0k32a-webtutor.herokuapp.com");
        // WebTutor.writePost("A front-end website written in HTML and CSS, then deployed on Heroku.");

        let WordleHelper = new Project("Wordle Helper", "https://github.com/notkaramel/WordleHelper");
        WordleHelper.writePost("A Chrome extension that helps you solve Wordle puzzles.");
        WordleHelper.setLink("./WordleHelper/")
        
        let JavaCalculator = new Project("Java Calculator", "https://github.com/notkaramel/JavaCalculator");
        JavaCalculator.writePost("A calculator application written in Java (JDK 18)");
        JavaCalculator.setLink("./JavaCalculator/");

        let Portfolio = new Project("Portfolio", "https://github.com/notkaramel/notkaramel.github.io");
        Portfolio.writePost("This portfolio!");
        Portfolio.setLink("https://antoinephan.me");

        // let ChordProgressionBuilder = new Project("Chord Progression Builder", "https://github.com/notkaramel/ChordProgressionBuilder");
        // ChordProgressionBuilder.writePost("An app that builds a chord progression based on your desired voice & progression.");

        let ArchLinuxARM = new Project("ArchLinux on ARM", "https://github.com/notkaramel/ArchLinux-ARM-Installer");
        ArchLinuxARM.writePost("ArchLinux installer for Raspberry Pi.");
        ArchLinuxARM.setLink("./ArchLinux-on-ARM/");

        let RaspberryPi = new Project("Raspberry Pi", "https://github.com/notkaramel/RaspberryPi");
        RaspberryPi.writePost("Experimenting with Raspberry Pi's GPIO pins and simple circuits");
        RaspberryPi.setLink("./RaspberryPi/");

        return (
            <div className="projects" id="projects">
                <h1 className="section-title">Projects</h1>

                {/* The project-grid the container of all the projects.
                All projects within this sections are grid items. */}
                <section className="project-flex">
                    {Portfolio.createPost()}
                    {JavaCalculator.createPost()}
                    {ArchLinuxARM.createPost()}
                    {RaspberryPi.createPost()}
                </section>
            </div>
        );
    }
}


// Project object/class for each project I have done
class Project {
    constructor(project_name, github_link) {
        this.name = project_name;
        this.github = github_link;
        this.link = "";
    }

    writePost(post) {
        this.post = post;
    }

    setLink(project_link) {
        this.link = project_link;
    }

    showLink() {
        if (this.link !== "") {
            let linktoproj = (
                <a href={this.link}
                    rel="noreferrer"
                    target="_blank">
                    {linkto_icon}
                </a>
            )
            return linktoproj;
        }
    }

    createPost() {
        let project_id = this.name.replaceAll(' ', '-');
        // console.log(project_id);

        return (
            <div className="project-grid" id={project_id}>
                <p className="project-title">{this.name}</p>
                <p className="project-desc">{this.post}</p>
                <div className="project-link">
                    <span className="link" id="github">
                        <a href={this.github}
                            target="_blank"
                            rel="noreferrer"
                            title={this.name}>
                            {github_icon}
                        </a>
                    </span>
                    <span className="link" id="linkto">
                        {this.showLink()}
                    </span>
                </div>
            </div>
        );
    }
}

export default MyProjects;