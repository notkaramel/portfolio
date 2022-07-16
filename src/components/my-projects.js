import React from "react";
import { PropTypes } from "react";
import './css/my-projects.css'

const github_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"

class Project {
    constructor(project_name, prj_date, github_link)
    {
        this.name = project_name;
        this.date = prj_date;
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
                    <img src={require('./images/exit-top-right.png')}
                        alt={this.link}
                        
                        width="45px"/>
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
            <div className="Project" id={project_id}>
                <p className="date">Since {this.date}</p>
                <p className="project-title">{this.name}</p>
                <p className="project-post">{this.post}</p>
                <p className="github-link">
                    <a  href={this.github}
                        target="_blank"
                        rel="noreferrer"
                        title={this.name}>
                        <img src={github_icon} 
                             alt="github_link"
                             width="50px"></img>
                    </a>
                </p>
                <p className="project-link" id={this.name+"-link"}>{this.showLink()}</p>
            </div>
        );
    }
}

class MyProjects extends React.Component {
    render()
    {
        let WebTutor = new Project("web_tutorial_b0k32a", 2018, "https://github.com/notkaramel/web_tutorial_B0K32A");
        WebTutor.setLink("https://b0k32a-webtutor.herokuapp.com");
        WebTutor.writePost("A front-end website written in HTML and CSS, then deployed on Heroku.");
        
        let WordleHelper = new Project("Wordle Helper", 2022, "https://github.com/notkaramel/WordleHelper");
        WordleHelper.writePost("A Chrome extension that helps you solve Wordle (hard mode enforced)");
        
        let JavaCalculator = new Project("Java Calculator", 2022, "https://github.com/notkaramel/JavaCalculator");
        JavaCalculator.writePost("A calculator application written in Java (JDK 18)");
        //scrape this.github -> class="f4 my-3"

        let Portfolio = new Project("Portfolio", 2022, "https://github.com/notkaramel/notkaramel.github.io");
        Portfolio.setLink("https://notkaramel.github.io");
        Portfolio.writePost("This portfolio!")
        
        return (
            <div className="my-projects">
                <h1>~ Projects ~</h1>
                <ul>
                    <li>{Portfolio.createPost()}</li>
                    <li>{JavaCalculator.createPost()}</li>
                    <li>{WordleHelper.createPost()}</li>
                    <li>{WebTutor.createPost()}</li>
                </ul>
            </div>
        );
    }
}

export default MyProjects;