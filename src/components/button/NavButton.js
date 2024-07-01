import React from "react";
import { NavLink } from "react-router-dom";

import "./Button.css";

export default function NavButton(props) {
    return (
        <NavLink
            id={props.id}
            exact
            to={props.path}
            className="nav-link background-change"
            activeClassName="nav-link-active"
            onClick={props.onClick}
        >
            {props.label.toUpperCase()}
        </NavLink>
    )
}
