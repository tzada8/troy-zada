import React from "react";

import { blogData } from "../../data/blog/BlogData";

import DetailedPost from "../../components/detailed-post/DetailedPost";
import Subtitle from "../../components/subtitle/Subtitle";
import "./Blog.css";

export default function Blog() {
	return (
		<div>
			<Subtitle icon="fas fa-blog" label="Recent Posts" />
			<DetailedPost
				label={blogData.firstWorkTerm.label}
				path={blogData.firstWorkTerm.path}
				src={blogData.firstWorkTerm.image}
				details={`Troy Zada \u00A0|\u00A0 ${blogData.firstWorkTerm.date}`}
			/>
			<DetailedPost
				label={blogData.creatingThisWebsite.label}
				path={blogData.creatingThisWebsite.path}
				src={blogData.creatingThisWebsite.image}
				details={`Troy Zada \u00A0|\u00A0 ${blogData.creatingThisWebsite.date}`}
			/>
		</div>
	);
}
