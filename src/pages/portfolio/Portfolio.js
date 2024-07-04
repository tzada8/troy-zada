import React from "react";

import { portfolio, routes } from "../../routes/routes";

import DetailedPost from "../../components/detailed-post/DetailedPost";
import Subtitle from "../../components/subtitle/Subtitle";

export default function Portfolio() {
	return (
		<div>
			<Subtitle icon="fas fa-code" label="Coding Projects" />
			{routes[portfolio].subroutes.map((proj, k) => (
				<DetailedPost
					key={k}
					path={proj.path}
					label={proj.label}
					src={proj.image}
					details={proj.tagline}
					bottomSpacing={routes[portfolio].subroutes.length - 1 !== k}
				/>
			))}
		</div>
	);
}
