import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioData } from "../../../../../../data/PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

function BlackJack() {
	const blackJack = portfolioData.coding.blackJack;
	return (
		<div>
			<CodingProjectPost
				projectTitle={blackJack.title}
				src={blackJack.image}
				date={blackJack.date}
				github={blackJack.github}
				youtube={blackJack.youtube}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}

export default BlackJack;
