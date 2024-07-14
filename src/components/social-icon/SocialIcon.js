import React, { useState } from "react";

import RoutingButton from "../button/RoutingButton";
import "./SocialIcon.css";

export default function SocialIcon(props) {
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const tooltipClass = isTooltipVisible ? "visible-tooltip" : "";

	return (
		<div
			className="icon-frame"
			onMouseEnter={() => setIsTooltipVisible(true)}
			onMouseLeave={() => setIsTooltipVisible(false)}
		>
			<RoutingButton path={props.link} icon={props.icon} aria={props.aria} color="blue" />
			{props.tooltip && (
				<div className={`social-tooltip center ${tooltipClass}`}>{props.tooltip}</div>
			)}
		</div>
	);
}
