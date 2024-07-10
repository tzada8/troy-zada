import React from "react";

import "./Icon.css";

export default function Icon(props) {
    // TODO: Clean up nesting (better to just provide a string for "props.color").
    const size = props.large ? "large"
        : props.small ? "small"
        : "";
    const color = props.white ? "white-color"
        : props.blue ? "blue-color"
        : props.green ? "green-color"
        : props.red ? "red-color"
        : props.orange ? "orange-color"
        : "";
    const clickable = props.clickable && (props.white ? "clickable-grey" : "clickable-blue");
    const customClass = `${props.className} ${size} ${color} ${clickable}`;

    return React.cloneElement(props.image, {className: `generic-icon ${customClass}`});
}
