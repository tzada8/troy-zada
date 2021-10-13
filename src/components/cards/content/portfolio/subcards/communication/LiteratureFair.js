import React from "react";
import ComProjectPost from "../../project_post/communication/ComProjectPost";
import { portfolioComData } from "../../../../../../data/PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

function LiteratureFair() {
	const literatureFair = portfolioComData.literatureFair;
	return (
		<div>
			<ComProjectPost
				projectTitle={literatureFair.title}
				src={literatureFair.image}
				date={literatureFair.date}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}

export default LiteratureFair;
