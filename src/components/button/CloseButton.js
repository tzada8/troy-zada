import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

export default function CloseButton(props) {
    return (
        <Link to={props.backTo} className="close-menu">
            <i className="fas fa-times" />
        </Link>
    )
}
