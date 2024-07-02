import React from "react";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import "./Header.css";

export default function Header(props) {
    return (
        <div className="header-container">
            <h1 className="header-title">{props.label}</h1>
            <HorizontalBar />
        </div>
    )
}
