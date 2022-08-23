import React from "react";
// First usage of style.sass with the new naming convention
import "./scss/styles.scss";

export default function Experience() {
    return (
        <div className="experience" id="experience">
            <h1 className="section-title">Experience</h1>
            <div className="container">
                <div className="container-flex">
                    <div className="year">JUN-2020 ~ AUG-2021</div>
                    <p className="title">
                        VICAS VIETNAM
                    </p>
                    <div className="container-flex-item">
                        
                    </div>
                </div>
                <div className="container-flex">
                    <div className="year">FEB-2019 ~ AUG-2020</div>
                    <p className="title">
                        Đồ Chơi Chữ
                    </p>
                </div>
            </div>
        </div>
    );
}