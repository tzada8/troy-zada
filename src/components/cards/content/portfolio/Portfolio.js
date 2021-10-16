import React from "react";
import Subtitle from "../extra-components/subtitle/Subtitle";
import ProjectCard from "./project-card/ProjectCard";
import GroupsDivider from "../extra-components/groups-divider/GroupsDivider";
import { portfolioData } from "../../../../data/portfolio/PortfolioData";

function Portfolio() {
	function displayProjectData(data) {
		return (
			<ul>
				{Object.keys(data).map((key) => {
					const currentProject = data[key];
					return (
						<ProjectCard
							path={currentProject.path}
							label={currentProject.label}
							src={currentProject.image}
							text={currentProject.briefDescription}
							key={key}
						/>
					);
				})}
			</ul>
		);
	}
	const codingProjectCardsDisplay = displayProjectData(portfolioData.coding);
	const comProjectCardsDisplay = displayProjectData(
		portfolioData.communication
	);

	return (
		<div>
			<Subtitle icon="fas fa-code" label="Coding Projects" />
			{codingProjectCardsDisplay}
			<GroupsDivider />
			<Subtitle icon="fas fa-comments" label="Communication Projects" />
			{comProjectCardsDisplay}
		</div>
	);
}

export default Portfolio;
