import React from "react";
import { Link } from "react-router-dom";

import PostImage from "../post-image/PostImage";
import "./DetailedPost.css";

export default function DetailedPost(props) {
	const isClickable = props.path ? true : false;

    // TODO: Maybe adjust RoutingButton component to also work for just icons.
    // TODO: Add icon hover functionality too.
    const detailsIcon = isClickable
        ? <i className="post-icon fas fa-angle-right" />
        : props.github ? <a href={props.github} target="_blank" rel="noreferrer" className="post-icon">
                <i className="fab fa-github" />
            </a> : <></>;

    const content = (
        <div>
			<PostImage clickable={isClickable} src={props.src} alt={props.label} />
			<div className="post-description-box">
				<h3 className="post-title">{props.label}</h3>
				<h4 className="post-details">{props.details}</h4>
				{detailsIcon}
			</div>
		</div>
    );

	return (
		<div>
			{isClickable ? <Link to={props.path} className="post-content">{content}</Link> : content}
			<hr className="horizontal-bar__post" />
		</div>
	);
}
