import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import BlogCard from "./blog_card/BlogCard";
import { blogData } from "../../../../data/BlogData";

function Blog() {
	return (
		<div>
			<Subtitle icon="fas fa-blog" label="Recent Posts" />
			<ul>
				<BlogCard
					blogTitle={blogData.firstWorkTerm.title}
					path={blogData.firstWorkTerm.path}
					src={blogData.firstWorkTerm.image}
					date={blogData.firstWorkTerm.date}
				/>
				<BlogCard
					blogTitle={blogData.creatingThisWebsite.title}
					path={blogData.creatingThisWebsite.path}
					src={blogData.creatingThisWebsite.image}
					date={blogData.creatingThisWebsite.date}
				/>
			</ul>
		</div>
	);
}

export default Blog;
