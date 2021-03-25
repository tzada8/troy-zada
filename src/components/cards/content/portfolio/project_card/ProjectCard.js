import React from "react";
import { Link } from "react-router-dom";
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
         <Link className="see-more-link" to={props.path}>
            SEE MORE
         </Link>
      </li>
   );
}

export default ProjectCard;
