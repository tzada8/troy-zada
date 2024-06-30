import React from "react";

import "./Footer.css";

function Footer(props) {
    return (
        <div className="footer-container">
            <hr className="horizontal-bar__footer" />
            <p className="footer-quote">
                "{props.quote}" - <span className="footer-author">{props.author}</span>
            </p>
        </div>
    )
}

export default Footer;
