import React from "react";

import RoutingButton from "../../../../button/RoutingButton";
import "./TwoExternalLinks.css";

function TwoExternalLinks(props) {
	return (
		<div>
			<div className="project-gh">
				<RoutingButton
					path={props.github}
					label="GitHub"
					icon="fab fa-github"
				/>
			</div>
			<div className="project-yt">
				<RoutingButton
					path={props.youtube}
					label="YouTube"
					icon="fab fa-youtube"
				/>
			</div>
		</div>
	);
}

export default TwoExternalLinks;
