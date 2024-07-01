import React, { useState } from "react";

import "./SocialIcon.css";

export default function SocialIcon(props) {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    return (
        <div
            className="icon-frame"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
        >
            <a href={props.link} target="_blank" rel="noreferrer">
                {/* TODO: Reminder to convert all these to react-icons: <FaEnvelope />. */}
                <i className={`social-icon ${props.icon}`} />
            </a>
            {props.tooltip && isTooltipVisible && <div className="social-tooltip">{props.tooltip}</div>}
        </div>
    )
}
