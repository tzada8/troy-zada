import React from "react";
import { Link } from "react-router-dom";

import { home } from "../../routes/routes";

import "./Logo.css";

export default function Logo(props) {
    return (
        <Link to={home.path} onClick={props.onClick} className={`logo-container ${props.className}`}>
            <div className="personal-logo logo-text">TZ</div>
        </Link>
    );
}
