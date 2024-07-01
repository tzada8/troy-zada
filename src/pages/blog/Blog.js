import React from "react";

import { blogData } from "../../data/blog/BlogData";

import BlogCard from "../../components/cards/content/blog/blog-card/BlogCard";
import Subtitle from "../../components/subtitle/Subtitle";
import "./Blog.css";

export default function Blog() {
	return (
		<div>
			<Subtitle icon="fas fa-blog" label="Recent Posts" />
			<ul>
				<BlogCard
					label={blogData.firstWorkTerm.label}
					path={blogData.firstWorkTerm.path}
					src={blogData.firstWorkTerm.image}
					date={blogData.firstWorkTerm.date}
				/>
				<BlogCard
					label={blogData.creatingThisWebsite.label}
					path={blogData.creatingThisWebsite.path}
					src={blogData.creatingThisWebsite.image}
					date={blogData.creatingThisWebsite.date}
				/>
			</ul>
		</div>
	);
}
