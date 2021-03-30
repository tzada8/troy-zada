import React from "react";
import BlogPost from "../blog_post/BlogPost";
import { blogData } from "../BlogData";

function CreatingThisWebsite() {
   return (
      <div>
         <BlogPost
            src={blogData.creatingThisWebsite.image}
            blogTitle={blogData.creatingThisWebsite.title}
            date={blogData.creatingThisWebsite.date}
         />
         <p>Creating This Website blog post</p>
      </div>
   );
}

export default CreatingThisWebsite;
