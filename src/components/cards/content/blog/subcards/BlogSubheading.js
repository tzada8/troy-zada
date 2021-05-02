import React from "react";
import "./BlogContent.css";

function BlogSubheading(props) {
   return (
      <div>
         <h3 className="blog-content-subheading">{props.subheading}</h3>
      </div>
   );
}

export default BlogSubheading;
