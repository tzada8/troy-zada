import React from "react";
import { Link } from "react-router-dom";
import "./LinkToInternal.css";

function LinkToInternal(props) {
	return (
		<Link className="link-to-internal" to={props.path}>
			{props.label}
			<i className={"icon-link " + props.icon} />
		</Link>
	);
}

export default LinkToInternal;
