import React from "react";
import "./BlogPost.css";

function BlogPost(props) {
   return (
      <div>
         <figure className="blog-picwrap">
            <img
               className="blog-image post-specific"
               src={props.src}
               alt="Blog Post"
            />
         </figure>
         <div className="blog-description-box">
            <h3 className="blog-title">{props.blogTitle}</h3>
            <h4 className="blog-date">{props.date}</h4>
         </div>
         <hr className="horizontal-bar__blog-posts hr-blog-margin-adjust" />
      </div>
   );
}

export default BlogPost;
