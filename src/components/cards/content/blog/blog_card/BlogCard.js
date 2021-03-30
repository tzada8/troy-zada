import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard(props) {
   return (
      <>
         <li className="blog-container">
            <Link className="blog-content" to={props.path}>
               <figure className="blog-picwrap">
                  <img className="blog-image" src={props.src} alt="Blog Post" />
               </figure>
               <div className="blog-description-box">
                  <h3 className="blog-title">{props.blogTitle}</h3>
                  <h4 className="blog-date">{props.date}</h4>
               </div>
            </Link>

            <hr className="horizontal-bar__blog-posts" />
         </li>
      </>
   );
}

export default BlogCard;
