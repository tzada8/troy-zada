import React from "react";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import "./Subtitle.css";

export default function Subtitle(props) {
   return (
      <div className="subtitle-container">
         <h3 className="subtitle-header">
            <i className={`subtitle-icon ${props.icon}`} />
            {props.label}
         </h3>
         <HorizontalBar dotted />
      </div>
   );
}
