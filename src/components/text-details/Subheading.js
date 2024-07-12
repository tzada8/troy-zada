import React from "react";

import "./TextDetails.css";

export default function Subheading(props) {
    return (
        <div>
            {props.first && <br />}
            <h3 className="content-subheading justify">{props.label}</h3>
        </div>
    );
}
