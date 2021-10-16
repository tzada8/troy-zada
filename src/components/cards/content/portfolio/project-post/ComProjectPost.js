import React from "react";
import ImageWithLabel from "../../extra-components/image-with-label/ImageWithLabel";
import "./ComProjectPost.css";

function ComProjectPost(props) {
	return (
		<div>
			<ImageWithLabel
				label={props.label}
				imageOnHover="no-zoom-in"
				src={props.src}
			/>
			<div className="project-date-container">
				<h4 className="project-date-com">{props.date}</h4>
			</div>
			<hr className="horizontal-bar__com-project-posts hr-blog-margin-adjust" />
		</div>
	);
}

export default ComProjectPost;
