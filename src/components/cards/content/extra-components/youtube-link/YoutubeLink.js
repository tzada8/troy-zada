import React from "react";
import "./YoutubeLink.css";

function YoutubeLink(props) {
   return (
      <a
         className="youtube-link"
         href={props.path}
         target="_blank"
         rel="noreferrer"
         aria-label="Youtube"
      >
         <i className="fab fa-youtube" />
         YouTube
      </a>
   );
}

export default YoutubeLink;
