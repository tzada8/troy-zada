import React from "react";
import "./BlogContent.css";

function BlogParagraph(props) {
   return (
      <div>
         <p className="indent-paragraph">{props.content}</p>
         <br />
      </div>
   );
}

export default BlogParagraph;
