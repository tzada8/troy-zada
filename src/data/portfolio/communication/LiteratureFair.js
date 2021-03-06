import React from "react";
import ProjectPost from "../../../components/cards/content/portfolio/project-post/ProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";

function LiteratureFair() {
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

export default LiteratureFair;
