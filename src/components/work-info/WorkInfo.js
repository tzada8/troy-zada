import React from "react";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import "./WorkInfo.css";

export default function WorkInfo(props) {
	const companyAndDuration = props.company
		? `${props.company}, ${props.duration}`
		: props.duration;

	return (
		<div className="work-info-container">
			<h3 className="work-role">{props.label}</h3>
			<h4 className="work-duration">{companyAndDuration}</h4>
			<HorizontalBar />
			<ul className="work-description">
				{props.details.map((d, k) => (
					<li key={k} className="work-detail">
						{d}
					</li>
				))}
			</ul>
		</div>
	);
}
