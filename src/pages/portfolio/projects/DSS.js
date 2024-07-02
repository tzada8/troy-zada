import React from "react";

import { portfolioData } from "../../../data/portfolio/PortfolioData";

import DetailedPost from "../../../components/detailed-post/DetailedPost";
import Paragraph from "../../../data/components/Paragraph";
import Subheading from "../../../data/components/Subheading";

export default function DSS() {
	const dss = portfolioData.coding.dss;
	return (
		<div>
			<DetailedPost
				label={dss.label}
				src={dss.image}
				details={`Troy Zada \u00A0|\u00A0 ${dss.date}`}
				github={dss.github}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
