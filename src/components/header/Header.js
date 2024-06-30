import React from "react";

import "./Header.css";

export default function Header(props) {
    return (
        <div className="header-container">
            <h1 className="header-title">{props.label}</h1>
            <hr className="horizontal-bar__title" />
        </div>
    )
}
