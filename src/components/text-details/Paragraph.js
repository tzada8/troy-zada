import React from "react";

import "./TextDetails.css";

export default function Paragraph(props) {
    return (
        <div>
            <p className="indent-paragraph">{props.content}</p>
            <br />
        </div>
    )
}
