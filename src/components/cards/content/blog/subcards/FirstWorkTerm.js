import React from "react";
import BlogPost from "../blog_post/BlogPost";
import "./BlogContent.css";
import { blogData } from "../BlogData";

function FirstWorkTerm() {
   return (
      <div>
         <BlogPost
            src={blogData.firstWorkTerm.image}
            blogTitle={blogData.firstWorkTerm.title}
            date={blogData.firstWorkTerm.date}
         />

         <p className="indent-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            blanditiis error dolore quam dignissimos quia, architecto corporis
            ipsum, distinctio, quasi magni suscipit vitae fugiat? Excepturi
            reiciendis nulla voluptates consequatur voluptate id repudiandae
            placeat porro qui? Atque ipsam est eius necessitatibus eos corrupti
            doloremque exercitationem et maxime id, nesciunt magnam delectus.
         </p>
         <br />
         <p className="indent-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ea corporis esse ipsam minima, sapiente exercitationem numquam vitae
            officia itaque quidem culpa, odit deserunt, consectetur nam a amet
            dicta porro fuga eaque voluptatum ad placeat sint. Non distinctio
            aliquid itaque, consectetur vero excepturi, ipsam enim animi
            consequatur quos doloremque laboriosam?
         </p>
      </div>
   );
}

export default FirstWorkTerm;
