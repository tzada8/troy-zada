import React from "react";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import "./Footer.css";

export default function Footer(props) {
    return (
        <div className="footer-container">
            <HorizontalBar light />
            {props.quote && props.author && <p className="body-small footer-quote">
                "{props.quote}" - <span className="footer-author">{props.author}</span>
            </p>}
        </div>
    )
}
