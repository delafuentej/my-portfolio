import React from "react";

import "./Nav.css";

const Nav=()=>{

    return(
        <ul 
        className="nav-list">
            <li className="nav-list-item">Home</li>
            <li className="nav-list-item">About me</li>
            <li className="nav-list-item">Projects</li>
            <li className="nav-list-item">Skills</li>
            <li className="nav-list-item">Contact me</li>

        </ul>
    )

}


export default Nav;