import React from "react";
import GithubLink from "../../../extra_components/github_link/GithubLink";
import YoutubeLink from "../../../extra_components/youtube_link/YoutubeLink";
import "./CodingProjectPost.css";

function CodingProjectPost(props) {
	return (
		<div>
			<figure className="project-picwrap" data-category={props.label}>
				<img
					className="project-image post-specific"
					src={props.src}
					alt="Project Post"
				/>
			</figure>
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
