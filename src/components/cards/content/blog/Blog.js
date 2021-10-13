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
					path="/blog/first-work-term"
					src={blogData.firstWorkTerm.image}
					date={blogData.firstWorkTerm.date}
					blogTitle={blogData.firstWorkTerm.title}
				/>
				<BlogCard
					path="/blog/creating-this-website"
					src={blogData.creatingThisWebsite.image}
					date={blogData.creatingThisWebsite.date}
					blogTitle={blogData.creatingThisWebsite.title}
				/>
			</ul>
		</div>
	);
}

export default Blog;
