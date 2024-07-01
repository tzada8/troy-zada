import React from "react";

import "./WorkInfo.css";

export default function WorkInfo(props) {
    const companyAndDuration = props.company === undefined
        ? props.duration
        : `${props.company}, ${props.duration}`;

    return (
        <div className="work-info-container">
            <h3 className="work-role">{props.label}</h3>
            <h4 className="work-duration">{companyAndDuration}</h4>
            <hr className="horizontal-bar__work" />
            <p>{props.description}.</p>
            {/* TODO: Make description in bulleted list. */}
            {/* <ul>
                {props.details.map((d, k) => <li key={k} className="work-detail">{d}</li>)}
            </ul> */}
        </div>
    )
}
