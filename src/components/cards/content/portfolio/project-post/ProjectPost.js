import React from "react";
import ImageWithLabel from "../image-with-label/ImageWithLabel";
import TwoExternalLinks from "../../extra-components/link-to-external/TwoExternalLinks";
import "./ProjectPost.css";

function ProjectPost(props) {
	return (
		<div>
			<ImageWithLabel
				label={props.label}
				imageOnHover="no-zoom-in"
				src={props.src}
			/>
			<div className="project-post-container">
				{props.isCoding ? (
					<TwoExternalLinks
						github={props.github}
						youtube={props.youtube}
					/>
				) : (
					<></>
				)}
				<h4 className="project-date">{props.date}</h4>
			</div>
			<hr className="horizontal-bar__project-posts hr-blog-margin-adjust" />
		</div>
	);
}

export default ProjectPost;
