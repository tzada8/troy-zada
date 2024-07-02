import React from "react";

import { portfolioData } from "../../../data/portfolio/PortfolioData";

import DetailedPost from "../../../components/detailed-post/DetailedPost";
import Paragraph from "../../../data/components/Paragraph";
import Subheading from "../../../data/components/Subheading";

export default function Industry4() {
	const industry4 = portfolioData.communication.industry4;
	return (
		<div>
			<DetailedPost
				label={industry4.label}
				src={industry4.image}
				details={`Troy Zada \u00A0|\u00A0 ${industry4.date}`}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
