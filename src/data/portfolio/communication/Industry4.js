import React from "react";
import ProjectPost from "../../../components/cards/content/portfolio/project-post/ProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";

function Industry4() {
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

export default Industry4;
