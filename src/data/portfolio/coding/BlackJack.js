import React from "react";
import CodingProjectPost from "../../../components/cards/content/portfolio/project_post/coding/CodingProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";

function BlackJack() {
	const blackJack = portfolioData.coding.blackJack;
	return (
		<div>
			<CodingProjectPost
				label={blackJack.label}
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
