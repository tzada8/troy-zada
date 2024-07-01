import React from "react";
import { Link } from "react-router-dom";

import ImageWithLabel from "../image-with-label/ImageWithLabel";
import RoutingButton from "../../../../button/RoutingButton";
import "./ProjectCard.css";

function ProjectCard(props) {
	return (
		<>
			<hr className="horizontal-bar__projects" />

			<li className="project-container">
				<Link className="project-content" to={props.path}>
					<ImageWithLabel
						label={props.label}
						imageOnHover="zoom-in"
						src={props.src}
					/>
					<div className="project-description-box">
						<p className="project-description">{props.text}...</p>
					</div>
				</Link>
				<RoutingButton
					path={props.path}
					label="SEE MORE"
					icon="fas fa-angle-right"
				/>
			</li>
		</>
	);
}

export default ProjectCard;
