import React from "react";
import "./SubcardInfo.css";

function TechListItem(props) {
	return (
		<li className="tech-stack-list">
			<p>
				<b>{props.language}</b>: {props.description}
			</p>
		</li>
	);
}

export default TechListItem;
