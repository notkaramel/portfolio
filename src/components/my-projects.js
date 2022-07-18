import React from "react";
import './scss/my-projects.scss'

const github_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
const linkto_icon = require('./icons/exit-top-right.png');

// Project object/class for each project I have done!
class Project {
    constructor(project_name, github_link)
    {
        this.name = project_name;
        this.github = github_link;
        this.link = "";
    }

    writePost(post){
        this.post = post;
    }

    setLink(project_link){
        this.link = project_link;
    }

    showLink(){
        if (this.link !== "") {
            let linktoproj = (
                <a href={this.link}
                    rel="noreferrer"
                    target="_blank"
                    >
                    <img src={linkto_icon}
                        alt={this.link}
                        width="30px"/>
                </a>
            )
            return linktoproj;
        }
    }

    createPost()
    {
        let project_id = this.name + "-class";
        // console.log(project_id);
        
        return (
            <div className="project-flex-item" id={project_id}>
                <p className="project-title">{this.name}</p>
                <p className="project-post">{this.post}</p>
                <p className="links">
                    <span className="github-link">
                    <a  href={this.github}
                        target="_blank"
                        rel="noreferrer"
                        title={this.name}>
                        <img src={github_icon} 
                             alt="github_link"
                             width="30px"></img>
                    </a>
                    </span>
                    &nbsp;
                    <span className="link-to-project" id={this.name + "-link"}>
                        {this.showLink()}
                    </span>
                </p>
            </div>
        );
    }
}

class MyProjects extends React.Component {
    render()
    {
        let WebTutor = new Project("web_tutorial_b0k32a", "https://github.com/notkaramel/web_tutorial_B0K32A");
        WebTutor.setLink("https://b0k32a-webtutor.herokuapp.com");
        WebTutor.writePost("A front-end website written in HTML and CSS, then deployed on Heroku.");
        
        let WordleHelper = new Project("Wordle Helper", "https://github.com/notkaramel/WordleHelper");
        WordleHelper.writePost("A Chrome extension that helps you solve Wordle (hard mode enforced)");
        
        let JavaCalculator = new Project("Java Calculator", "https://github.com/notkaramel/JavaCalculator");
        JavaCalculator.setLink("https://notkaramel.github.io/JavaCalculator/");
        JavaCalculator.writePost("A calculator application written in Java (JDK 18)");
        //scrape this.github -> class="f4 my-3"

        let Portfolio = new Project("Portfolio", "https://github.com/notkaramel/notkaramel.github.io");
        Portfolio.setLink("https://notkaramel.github.io");
        Portfolio.writePost("This portfolio!");

        let ChordProgressionBuilder = new Project("Chord Progression Builder", "https://github.com/notkaramel/ChordProgressionBuilder");
        ChordProgressionBuilder.writePost("An app that builds a chord progression based on your desired voice & progression.");
        
        return (
            <div className="projects" id="projects">
                <h1 className="section-title">~ Projects ~</h1>
                
                {/* The project-grid the container of all the projects.
                All projects within this sections are grid items. */}
                <section className="project-flex">
                    {Portfolio.createPost()}
                    {JavaCalculator.createPost()}
                    {WordleHelper.createPost()}
                    {/* {WebTutor.createPost()} */}
                    {ChordProgressionBuilder.createPost()}
                </section>
            </div>
        );
    }
}

export default MyProjects;