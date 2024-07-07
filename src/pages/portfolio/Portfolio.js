import React from "react";
import { FaCode } from "react-icons/fa";

import { portfolio, routes } from "../../routes/routes";

import DetailedPost from "../../components/detailed-post/DetailedPost";
import Subtitle from "../../components/subtitle/Subtitle";

export default function Portfolio() {
	return (
		<div>
			<Subtitle icon={<FaCode />} label="Coding Projects" />
			{routes[portfolio].subroutes.map((proj, i) => (
				<DetailedPost
					key={proj.path}
					path={proj.path}
					label={proj.label}
					src={proj.image}
					details={proj.tagline}
					bottomSpacing={routes[portfolio].subroutes.length - 1 !== i}
				/>
			))}
		</div>
	);
}
