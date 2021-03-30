import React from "react";
import BlogPost from "../blog_post/BlogPost";
import { blogData } from "../BlogData";

function FirstWorkTerm() {
   return (
      <div>
         <BlogPost
            src={blogData.firstWorkTerm.image}
            blogTitle={blogData.firstWorkTerm.title}
            date={blogData.firstWorkTerm.date}
         />
         <p>First Work Term blog post</p>
      </div>
   );
}

export default FirstWorkTerm;
