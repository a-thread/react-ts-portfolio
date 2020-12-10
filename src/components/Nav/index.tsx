import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { HOME_PATH, RESUME_PATH, PORTFOLIO_PATH } from "../../utils/pathNames";
import "./style.scss";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div>
                    <h1><span className="green">Aiden</span> Threadgoode</h1>
                </div>
                <div>
                    <Button className="navItem"><Link className="link" to={HOME_PATH}>home</Link></Button>
                    <Button className="navItem"><Link className="link" to={PORTFOLIO_PATH}>projects</Link></Button>
                    <Button className="navItem"><Link className="link" to={RESUME_PATH}>resume</Link></Button>
                </div>
            </nav>
        )
    }
}

export default Nav;