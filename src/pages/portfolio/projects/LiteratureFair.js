import React from "react";

import { portfolioData } from "../../../data/portfolio/PortfolioData";

import Paragraph from "../../../data/components/Paragraph";
import ProjectPost from "../../../components/cards/content/portfolio/project-post/ProjectPost";
import Subheading from "../../../data/components/Subheading";

export default function LiteratureFair() {
	const literatureFair = portfolioData.communication.literatureFair;
	return (
		<div>
			<ProjectPost
				label={literatureFair.label}
				src={literatureFair.image}
				date={literatureFair.date}
				isCoding={false}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
