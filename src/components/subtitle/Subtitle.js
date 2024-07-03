import React from "react";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import Icon from "../icon/Icon";
import "./Subtitle.css";

export default function Subtitle(props) {
   return (
      <div className="subtitle-container">
         <h3 className="subtitle-header">
            <Icon image={props.icon} className="subtitle-icon" small />
            {props.label}
         </h3>
         <HorizontalBar dotted />
      </div>
   );
}
