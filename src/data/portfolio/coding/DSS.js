import React from "react";
import CodingProjectPost from "../../../components/cards/content/portfolio/project-post/coding/CodingProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";

function DSS() {
	const dss = portfolioData.coding.dss;
	return (
		<div>
			<CodingProjectPost
				label={dss.label}
				src={dss.image}
				date={dss.date}
				github={dss.github}
				youtube={dss.youtube}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}

export default DSS;
