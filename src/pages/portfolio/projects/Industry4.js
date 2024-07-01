import React from "react";

import { portfolioData } from "../../../data/portfolio/PortfolioData";

import Paragraph from "../../../data/components/Paragraph";
import ProjectPost from "../../../components/cards/content/portfolio/project-post/ProjectPost";
import Subheading from "../../../data/components/Subheading";

export default function Industry4() {
	const industry4 = portfolioData.communication.industry4;
	return (
		<div>
			<ProjectPost
				label={industry4.label}
				src={industry4.image}
				date={industry4.date}
				isCoding={false}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
