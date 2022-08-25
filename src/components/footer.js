import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1 className="section-title">Credits & Copyrights</h1>
                <div className="footer">
                    <div className="container">
                        <p>Sources for icons and svgs:
                            <span>
                                <br/>
                                <a href="https://devicon.dev" target={"_blank"} rel={"noreferrer"}>devicon.dev </a>
                                &
                                <a href="https://fontawesome.com" target={"_blank"} rel={"noreferrer"}> fontawesome.com</a>
                            </span>
                        </p>
                        <p>COPYRIGHTS  © <b>Antoine Phan</b> 2022</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;