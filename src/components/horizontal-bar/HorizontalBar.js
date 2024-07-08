import React from "react";

import "./HorizontalBar.css";

export default function HorizontalBar(props) {
    const size = props.thick && "thick";
    const style = props.dotted && "dotted";
    const color = props.light && "light";
    const calcClass = props.gradient ? "gradient-bar" : `generic-bar ${size} ${style} ${color}`;

    return <hr className={`${calcClass} ${props.className}`} />;
}
