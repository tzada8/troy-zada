import React from "react";
import { NavLink } from "react-router-dom";

import "./Button.css";

export default function NavButton(props) {
    const defaultClass = "button-font nav-link background-change";

    return (
        <NavLink
            to={props.path}
            className={({isActive}) => `${defaultClass} ${isActive ? "nav-link-active" : ""}`}
            onClick={props.onClick}
        >
            {props.label.toUpperCase()}
        </NavLink>
    )
}
