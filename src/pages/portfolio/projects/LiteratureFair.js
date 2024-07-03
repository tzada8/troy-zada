import React from "react";

import { portfolio, routes } from "../../../routes/routes";

import DetailedPost from "../../../components/detailed-post/DetailedPost";
import Paragraph from "../../../data/components/Paragraph";
import Subheading from "../../../data/components/Subheading";

export default function LiteratureFair() {
	const literatureFair = routes[portfolio].subroutes.communication[0];
	return (
		<div>
			<DetailedPost
				label={literatureFair.label}
				src={literatureFair.image}
				details={`Troy Zada \u00A0|\u00A0 ${literatureFair.date}`}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
