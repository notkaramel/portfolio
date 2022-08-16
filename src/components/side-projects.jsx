import React from "react";
import { linkto_icon, musescore_text_img } from "./icons/icons";

class SideProjects extends React.Component {
    render() {
        return (
            <div className="side-projects" id="side-projects">
                <h1 className="section-title">Side Projects</h1>
                {musescore_text_img}
            </div>
        );
    }
}


// Project object/class for each project I have done
class Project {
    constructor(project_name) {
        this.name = project_name;
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
        let project_id = this.name + "-class";
        // console.log(project_id);

        return (
            <div className="project-flex-item" id={project_id}>
                <p className="project-title">{this.name}</p>
                <p className="project-post">{this.post}</p>
                <p className="project-link">
                    <span className="link-to-project" id={this.name + "-link"}>
                        {this.showLink()}
                    </span>
                </p>
            </div>
        );
    }
}

export default SideProjects;