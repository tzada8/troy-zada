import React from "react";
import "./LinkToExternal.css";

function LinkToExternal(props) {
	return (
		<div>
			<a
				className="link-to-external"
				href={props.path}
				target="_blank"
				rel="noreferrer"
			>
				{props.label}
				<i className={"icon-link " + props.icon} />
			</a>
		</div>
	);
}

export default LinkToExternal;
