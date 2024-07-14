import React from "react";

import "./PostImage.css";

export default function PostImage(props) {
	const imageClass = props.clickable ? "clickable-post-image" : "regular-post-image";

	return (
		<figure className="post-image-container">
			<img src={props.src} className={imageClass} alt={props.alt} />
		</figure>
	);
}
