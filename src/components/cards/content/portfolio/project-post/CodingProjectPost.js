import React from "react";
import ImageWithLabel from "../../extra-components/image-with-label/ImageWithLabel";
import LinkToExternal from "../../extra-components/link-to-external/LinkToExternal";
import "./CodingProjectPost.css";

function CodingProjectPost(props) {
	return (
		<div>
			<ImageWithLabel
				label={props.label}
				imageOnHover="no-zoom-in"
				src={props.src}
			/>
			<div className="project-github-youtube">
				<div className="project-gh">
					<LinkToExternal
						path={props.github}
						label="GitHub"
						icon="fab fa-github"
					/>
				</div>
				<div className="project-yt">
					<LinkToExternal
						path={props.youtube}
						label="YouTube"
						icon="fab fa-youtube"
					/>
				</div>
				<h4 className="project-date-coding">{props.date}</h4>
			</div>
			<hr className="horizontal-bar__coding-project-posts hr-blog-margin-adjust" />
		</div>
	);
}

export default CodingProjectPost;
