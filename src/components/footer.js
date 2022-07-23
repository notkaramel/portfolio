import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="footer" id="citations">
                    <h1 className="section-title">~Citations~</h1>
                    <p>Source for icons: <a href="https://devicon.dev" target={"_blank"} rel={"noreferrer"}>devicon.dev</a></p>
                    <p>Source for svg icons: <a href="https://fontawesome.com" target={"_blank"} rel={"noreferrer"}>fontawesome.com</a></p>
                </div>
                <div className="footer" id="copyrights">
                    <p>COPYRIGHTS (c) Antoine Phan 2022</p>
                </div>
            </div>
        );
    }
}

export default Footer;