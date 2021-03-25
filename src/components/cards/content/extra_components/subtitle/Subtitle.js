import React from "react";
import "./Subtitle.css";

function Subtitle(props) {
   return (
      <div>
         <h3 className="subtitle-header">
            <i className={"subtitle-icon " + props.icon} />
            {props.label}
         </h3>
         <hr className="horizontal-bar__subtitle" />
      </div>
   );
}

export default Subtitle;
