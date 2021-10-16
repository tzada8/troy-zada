import React from "react";
import ComProjectPost from "../../../components/cards/content/portfolio/project_post/communication/ComProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";

function Industry4() {
	const industry4 = portfolioData.communication.industry4;
	return (
		<div>
			<ComProjectPost
				label={industry4.label}
				src={industry4.image}
				date={industry4.date}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}

export default Industry4;
