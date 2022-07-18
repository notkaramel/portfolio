import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="citations" id="citations">
                    <h1 className="section-title">~Citations~</h1>

                    <p>Source for icons: <a href="https://devicon.dev" target={"_blank"} rel={"noreferrer"}>devicon.dev</a></p>
                </div>
                <div className="copyrights" id="copyrights">
                    <h4>COPYRIGHTS (c) Antoine Phan 2022</h4>
                </div>
            </div>
        );
    }
}

export default Footer;