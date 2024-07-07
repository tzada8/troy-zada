import React from "react";
import { Link } from "react-router-dom";

import { home } from "../../routes/routes";

import "./Logo.css";

export default function Logo(props) {
    return (
        <Link to={home.path} onClick={props.onClick}>
            <div className={`personal-logo logo-text ${props.className}`}>TZ</div>
        </Link>
    );
}
