import React from "react";
import "./LinkToExternal.css";

function LinkToExternal(props) {
	return (
		<a
			className="link-to-external background-change"
			href={props.path}
			target="_blank"
			rel="noreferrer"
		>
			{props.label}
			<i className={"icon-link " + props.icon} />
		</a>
	);
}

export default LinkToExternal;
