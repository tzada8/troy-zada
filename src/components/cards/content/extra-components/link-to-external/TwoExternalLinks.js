import React from "react";
import LinkToExternal from "./LinkToExternal";
import "./TwoExternalLinks.css";

function TwoExternalLinks(props) {
	return (
		<div>
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
		</div>
	);
}

export default TwoExternalLinks;
