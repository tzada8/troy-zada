import React from "react";

import { portfolio, routes } from "../../../routes/routes";

import DetailedPost from "../../../components/detailed-post/DetailedPost";
import Paragraph from "../../../data/components/Paragraph";
import Subheading from "../../../data/components/Subheading";

export default function BlackJack() {
	const blackJack = routes[portfolio].subroutes.coding[4];
	return (
		<div>
			<DetailedPost
				label={blackJack.label}
				src={blackJack.image}
				details={`Troy Zada \u00A0|\u00A0 ${blackJack.date}`}
				github={blackJack.github}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
