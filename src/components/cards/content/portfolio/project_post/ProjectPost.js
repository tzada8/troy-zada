import React from "react";
import GithubLink from "../../extra_components/github_link/GithubLink";
import "./ProjectPost.css";

function ProjectPost(props) {
   return (
      <div>
         <figure className="project-picwrap" data-category={props.projectTitle}>
            <img
               className="project-image post-specific"
               src={props.src}
               alt="Project Post"
            />
         </figure>
         <div className="project-github-date">
            <h4 className="project-date">{props.date}</h4>
            <GithubLink path={props.github} />
         </div>
         <hr className="horizontal-bar__project-posts hr-blog-margin-adjust" />
      </div>
   );
}

export default ProjectPost;
