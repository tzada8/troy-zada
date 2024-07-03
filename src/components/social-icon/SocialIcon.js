import React, { useState } from "react";

import Icon from "../icon/Icon";
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
                <Icon image={props.icon} blue large clickable />
            </a>
            {props.tooltip && isTooltipVisible && <div className="social-tooltip">{props.tooltip}</div>}
        </div>
    )
}
