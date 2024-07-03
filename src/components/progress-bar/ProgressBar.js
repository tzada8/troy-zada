import React from "react";

import "./ProgressBar.css";

export default function ProgressBar(props) {
	const numberAsPercent = props.percent + "%";

	return (
		<li className="progress-container">
			<h4>
				{props.label}
				<span className="percentage">{numberAsPercent}</span>
			</h4>
			<div className="progress-bar__border">
				<div
					className="progress-bar__progress"
					style={{ width: numberAsPercent }}
				/>
			</div>
		</li>
	);
}
