import React, { Component } from "react";
import Box from "@material-ui/core/Box";
// import "./style.css";
import PDF from "./Aiden_Threadgoode_Resume.pdf";

class ResumeContainer extends Component {
    render() {
        return (
            <Box id="feedback">
                <div className="container resume">
                    <embed src={PDF} className="resume-pdf" width="800px" height="2100px" />
                </div>
            </Box >
        )
    }
}

export default ResumeContainer;