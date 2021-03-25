import React from "react";
import { Link } from "react-router-dom";
import SeeMoreLink from "../../extra_components/see_more_link/SeeMoreLink";
import "./ProjectCard.css";

function ProjectCard(props) {
   return (
      <li className="project-container">
         <Link className="project-content" to={props.path}>
            <figure
               className="project-picwrap"
               data-category={props.projectTitle}
            >
               <img className="project-image" src={props.src} alt="Project" />
            </figure>
            <div className="project-description-box">
               <p className="project-description">{props.text}</p>
            </div>
         </Link>
         <SeeMoreLink path={props.path} />
         <hr className="horizontal-bar__projects" />
      </li>
   );
}

export default ProjectCard;
