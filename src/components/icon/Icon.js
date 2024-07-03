import React from "react";

import "./Icon.css";

export default function Icon(props) {
    const size = props.large ? "large"
        : props.small ? "small"
        : undefined;
    const color = props.white ? "white-color"
        : props.blue ? "blue-color"
        : props.green ? "green-color"
        : undefined;
    const clickable = props.clickable && (props.white ? "clickable-grey" : "clickable-blue");
    const customClass = `${props.className} ${size} ${color} ${clickable}`;

    // TODO: This will need to be updated for react-icons.
    return <i className={`generic-icon ${props.image} ${customClass}`} />;
}
