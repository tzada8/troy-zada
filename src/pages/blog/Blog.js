import React from "react";

import { blog, routes } from "../../routes/routes";

import DetailedPost from "../../components/detailed-post/DetailedPost";
import Subtitle from "../../components/subtitle/Subtitle";

export default function Blog() {
	return (
		<div>
			<Subtitle icon="fas fa-blog" label="Recent Posts" />
			{routes[blog].subroutes.map((post, k) => (
				<DetailedPost
					key={k}
					path={post.path}
					label={post.label}
					src={post.image}
					details={`Troy Zada \u00A0|\u00A0 ${post.date}`}
				/>
			))}
		</div>
	);
}
