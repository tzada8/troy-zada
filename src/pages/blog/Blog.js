import React from "react";

import { blog, routes } from "../../routes/routes";

import DetailedPost from "../../components/detailed-post/DetailedPost";
import Subtitle from "../../components/subtitle/Subtitle";

export default function Blog() {
	return (
		<div>
			<Subtitle icon="fas fa-blog" label="Recent Posts" />
			<DetailedPost
				label={routes[blog].subroutes[0].label}
				path={routes[blog].subroutes[0].path}
				src={routes[blog].subroutes[0].image}
				details={`Troy Zada \u00A0|\u00A0 ${routes[blog].subroutes[0].date}`}
			/>
			<DetailedPost
				label={routes[blog].subroutes[1].label}
				path={routes[blog].subroutes[1].path}
				src={routes[blog].subroutes[1].image}
				details={`Troy Zada \u00A0|\u00A0 ${routes[blog].subroutes[1].date}`}
			/>
		</div>
	);
}
