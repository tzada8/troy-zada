import React from "react";
import { Link } from "react-router-dom";

import Icon from "../icon/Icon";
import "./Button.css";

export default function RoutingButton(props) {
    const isExternal = props.path.includes("https://");
    const marginClass = isExternal ? "external-margin" : "internal-margin";

    // TODO: Remove margin dependency entirely.
    const linkClass = `button-link background-change ${marginClass}`;
    const linkContent = (
        <p className="button-text">
            {props.label}
            <Icon image={props.icon} className="button-icon" small white />
        </p>
    );

    return isExternal ? (
        <a href={props.path} target="_blank" rel="noreferrer" className={linkClass}>
            {linkContent}
        </a>
    ) : (
        <Link to={props.path} className={linkClass}>
            {linkContent}
        </Link>
    )
}
