import React from "react";

import { portfolio, routes } from "../../routes/routes";

import DetailedPost from "../../components/detailed-post/DetailedPost";
import SectionSpacer from "../../components/section-spacer/SectionSpacer";
import Subtitle from "../../components/subtitle/Subtitle";
import "./Portfolio.css";

export default function Portfolio() {
	function displayProjectData(data) {
		return (
			<ul>
				{Object.keys(data).map((key) => {
					const currentProject = data[key];
					return (
						<DetailedPost
							path={currentProject.path}
							label={currentProject.label}
							src={currentProject.image}
							details={currentProject.briefDescription}
							key={key}
						/>
					);
				})}
			</ul>
		);
	}
	const codingProjectCardsDisplay = displayProjectData(routes[portfolio].subroutes.coding);
	const comProjectCardsDisplay = displayProjectData(routes[portfolio].subroutes.communication);

	return (
		<div>
			<Subtitle icon="fas fa-code" label="Coding Projects" />
			{codingProjectCardsDisplay}
			<SectionSpacer />
			<Subtitle icon="fas fa-comments" label="Communication Projects" />
			{comProjectCardsDisplay}
		</div>
	);
}
