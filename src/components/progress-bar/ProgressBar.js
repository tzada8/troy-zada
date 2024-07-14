import React from "react";

import "./ProgressBar.css";

export default function ProgressBar(props) {
	const numberAsPercent = `${props.percent}%`;

	return (
		<li className="progress-container">
			<p>
				{props.label}
				<span className="percentage">{numberAsPercent}</span>
			</p>
			<div className="progress-bar__border">
				<div className="progress-bar__progress" style={{ width: numberAsPercent }} />
			</div>
		</li>
	);
}
