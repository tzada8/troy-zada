import React, { useState } from "react";

import RoutingButton from "../button/RoutingButton";
import "./SocialIcon.css";

export default function SocialIcon(props) {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    return (
        <div
            className="icon-frame"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
        >
            <RoutingButton path={props.link} icon={props.icon} blue />
            {props.tooltip && isTooltipVisible && <div className="social-tooltip center">{props.tooltip}</div>}
        </div>
    )
}
