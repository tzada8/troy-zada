import React from "react";

import "./TextDetails.css";

export default function GroupedList(props) {
	return (
		<div>
			<p className={`${props.header.includes(":") ? "" : "bold"} justify`}>{props.header}</p>
			<ul>
				{props.bullets.map((b, k) => (
					<li key={k} className="list-item">
						<p className="justify">
							<span className="bold">{b.label}:</span> {b.content}
						</p>
					</li>
				))}
			</ul>
			{!props.last && <br />}
		</div>
	);
}
