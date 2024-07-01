import React from "react";

import { blogData } from "../../data/blog/BlogData";

import BlogPost from "../../components/blog-post/BlogPost";
import Subtitle from "../../components/subtitle/Subtitle";
import "./Blog.css";

export default function Blog() {
	return (
		<div>
			<Subtitle icon="fas fa-blog" label="Recent Posts" />
			<BlogPost
				label={blogData.firstWorkTerm.label}
				path={blogData.firstWorkTerm.path}
				src={blogData.firstWorkTerm.image}
				date={blogData.firstWorkTerm.date}
			/>
			<BlogPost
				label={blogData.creatingThisWebsite.label}
				path={blogData.creatingThisWebsite.path}
				src={blogData.creatingThisWebsite.image}
				date={blogData.creatingThisWebsite.date}
			/>
		</div>
	);
}
