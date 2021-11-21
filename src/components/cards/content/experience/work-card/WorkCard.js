import React from "react";
import "./WorkCard.css";

function WorkCard(props) {
	const companyAndDuration =
		props.company === undefined
			? props.duration
			: props.company + ", " + props.duration;

	return (
		<div className="work-card-container">
			<h3 className="work-title-company">{props.label}</h3>
			<h4 className="work-duration">{companyAndDuration}</h4>
			<hr className="horizontal-bar__work" />
			<p>{props.description}.</p>
		</div>
	);
}

export default WorkCard;
