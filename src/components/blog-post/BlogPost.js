import React from "react";
import { Link } from "react-router-dom";

import "./BlogPost.css";

export default function BlogPost(props) {
	const isClickable = props.path ? true : false;

    const content = (
        <div>
			<figure className="blog-picwrap">
				<img
					src={props.src}
					className={isClickable ? "clickable-blog-image" : "blog-image"}
					alt={`Blog image depicting ${props.label.toLowerCase()}`}
				/>
			</figure>
			<div className="blog-description-box">
				<h3 className="blog-title">{props.label}</h3>
				<h4 className="blog-details">Troy Zada &nbsp;|&nbsp; {props.date}</h4>
				{isClickable && <i className="blog-arrow fas fa-angle-right" />}
			</div>
		</div>
    );

	return (
		<div>
			{isClickable ? <Link to={props.path} className="blog-content">{content}</Link> : content}
			<hr className="horizontal-bar__blog-posts" />
		</div>
	);
}
