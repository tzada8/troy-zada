import React from "react";
import { Link } from "react-router-dom";
import SeeMoreLink from "../../extra-components/see-more-link/SeeMoreLink";
import "./ProjectCard.css";
import ImageWithLabel from "../../extra-components/image-with-label/ImageWithLabel";

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
				<SeeMoreLink path={props.path} />
			</li>
		</>
	);
}

export default ProjectCard;
