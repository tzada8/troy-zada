import React from "react";

import "./TextDetails.css";

export default function Paragraph(props) {
    return (
        <div>
            <p className="indent justify">{props.content}</p>
            {!props.last && <br />}
        </div>
    );
}
