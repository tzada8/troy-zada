import React from "react";

import { portfolio, routes } from "../../../routes/routes";

import DetailedPost from "../../../components/detailed-post/DetailedPost";
import Paragraph from "../../../data/components/Paragraph";
import Subheading from "../../../data/components/Subheading";

export default function DSS() {
	const dss = routes[portfolio].subroutes.coding[5];
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
