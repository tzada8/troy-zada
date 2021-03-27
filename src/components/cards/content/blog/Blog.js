import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import BlogCard from "./blog_card/BlogCard";

import item1_CreatingThisWebsite from "../../../../images/headshot_1.png";
import item2_FirstWorkTerm from "../../../../images/headshot_2.png";

function Blog() {
   return (
      <div>
         <Subtitle icon="fas fa-blog" label="Recent Posts" />
         <ul>
            <BlogCard
               path="/blog/creating-this-website"
               src={item1_CreatingThisWebsite}
               date="March 27, 2021"
               blogTitle="How I Created This Website"
            />
            <BlogCard
               path="/blog/first-work-term"
               src={item2_FirstWorkTerm}
               date="March 26, 2021"
               blogTitle="My First Coop Work Term"
            />
         </ul>
      </div>
   );
}

export default Blog;
