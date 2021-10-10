import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioCodingData } from "../../PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

function DSS() {
	const dss = portfolioCodingData.dss;
	return (
		<div>
			<CodingProjectPost
				projectTitle={dss.title}
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
