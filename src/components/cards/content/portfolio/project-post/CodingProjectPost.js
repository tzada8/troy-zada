import React from "react";
import ImageWithLabel from "../../extra-components/image-with-label/ImageWithLabel";
import GithubLink from "../../extra-components/github-link/GithubLink";
import YoutubeLink from "../../extra-components/youtube-link/YoutubeLink";
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
					<GithubLink path={props.github} />
				</div>
				<div className="project-yt">
					<YoutubeLink path={props.youtube} />
				</div>
				<h4 className="project-date-coding">{props.date}</h4>
			</div>
			<hr className="horizontal-bar__coding-project-posts hr-blog-margin-adjust" />
		</div>
	);
}

export default CodingProjectPost;
