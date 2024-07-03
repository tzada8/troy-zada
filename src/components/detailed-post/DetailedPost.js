import React from "react";
import { Link } from "react-router-dom";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import Icon from "../icon/Icon";
import PostImage from "../post-image/PostImage";
import "./DetailedPost.css";

export default function DetailedPost(props) {
	const isClickable = props.path ? true : false;

    // TODO: Maybe adjust RoutingButton component to also work for just icons.
    const detailsIcon = isClickable
        ? <Icon image="fas fa-angle-right" className="post-icon" clickable />
        : props.github ? <a href={props.github} target="_blank" rel="noreferrer" className="post-icon">
				<Icon image="fab fa-github" className="post-icon" clickable />
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
		<div className="post-container">
			{isClickable ? <Link to={props.path} className="post-content">{content}</Link> : content}
			<HorizontalBar thick />
		</div>
	);
}
