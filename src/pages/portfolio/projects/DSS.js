import React from "react";

import { portfolioData } from "../../../data/portfolio/PortfolioData";

import Paragraph from "../../../data/components/Paragraph";
import ProjectPost from "../../../components/cards/content/portfolio/project-post/ProjectPost";
import Subheading from "../../../data/components/Subheading";

export default function DSS() {
	const dss = portfolioData.coding.dss;
	return (
		<div>
			<ProjectPost
				label={dss.label}
				src={dss.image}
				date={dss.date}
				github={dss.github}
				youtube={dss.youtube}
				isCoding={true}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
