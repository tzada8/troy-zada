import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProjectCard from "./project_card/ProjectCard";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";
import { portfolioData } from "../../../../data/PortfolioData";

function Portfolio() {
	function displayProjectData(data) {
		return (
			<ul>
				{Object.keys(data).map((key) => {
					const currentProject = data[key];
					return (
						<ProjectCard
							path={currentProject.path}
							projectTitle={currentProject.title}
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
