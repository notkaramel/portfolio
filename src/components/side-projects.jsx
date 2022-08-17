import React from "react";
import { musescore_text_img } from "./icons/icons";

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


export default SideProjects;