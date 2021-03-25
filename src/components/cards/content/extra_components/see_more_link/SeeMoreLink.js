import React from "react";
import { Link } from "react-router-dom";
import "./SeeMoreLink.css";

function SeeMoreLink(props) {
   return (
      <Link className="see-more-link" to={props.path}>
         SEE MORE
      </Link>
   );
}

export default SeeMoreLink;
