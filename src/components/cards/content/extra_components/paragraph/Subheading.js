import React from "react";
import "./ParagraphContent.css";

function Subheading(props) {
   return (
      <div>
         <h3 className="content-subheading">{props.subheading}:</h3>
      </div>
   );
}

export default Subheading;
