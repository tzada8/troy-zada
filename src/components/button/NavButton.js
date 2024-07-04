import React from "react";
import { NavLink } from "react-router-dom";

import "./Button.css";

export default function NavButton(props) {
    return (
        <NavLink
            exact={props.exact}
            to={props.path}
            className="button-font nav-link background-change"
            activeClassName="nav-link-active"
            onClick={props.onClick}
        >
            {props.label.toUpperCase()}
        </NavLink>
    )
}
