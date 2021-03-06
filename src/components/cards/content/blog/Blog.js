import React from "react";
import Subtitle from "../extra-components/subtitle/Subtitle";
import BlogCard from "./blog-card/BlogCard";
import { blogData } from "../../../../data/blog/BlogData";

function Blog() {
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

export default Blog;
