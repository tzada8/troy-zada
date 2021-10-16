import React from "react";
import "./GithubLink.css";

function GithubLink(props) {
   return (
      <a
         className="github-link"
         href={props.path}
         target="_blank"
         rel="noreferrer"
         aria-label="Github"
      >
         <i className="fab fa-github" />
         GitHub
      </a>
   );
}

export default GithubLink;
