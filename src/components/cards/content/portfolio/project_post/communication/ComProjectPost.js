import React from "react";
import "./ComProjectPost.css";

function ComProjectPost(props) {
   return (
      <div>
         <figure className="project-picwrap" data-category={props.projectTitle}>
            <img
               className="project-image post-specific"
               src={props.src}
               alt="Project Post"
            />
         </figure>
         <div className="project-date-container">
            <h4 className="project-date">{props.date}</h4>
         </div>
         <hr className="horizontal-bar__project-posts hr-blog-margin-adjust" />
      </div>
   );
}

export default ComProjectPost;
