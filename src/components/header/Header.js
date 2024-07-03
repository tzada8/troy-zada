import React from "react";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import "./Header.css";

export default function Header(props) {
    return (
        <div className="header-container">
            <h2 className="header-title">{props.label}</h2>
            <HorizontalBar />
        </div>
    )
}
