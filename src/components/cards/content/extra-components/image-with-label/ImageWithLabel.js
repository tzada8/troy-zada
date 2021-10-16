import React from "react";
import "./ImageWithLabel.css";

function ImageWithLabel(props) {
	return (
		<figure className="project-picwrap" data-category={props.label}>
			<img
				className={"project-image " + props.imageOnHover}
				src={props.src}
			/>
		</figure>
	);
}

export default ImageWithLabel;
