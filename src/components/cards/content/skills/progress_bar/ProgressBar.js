import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
   return (
      <li className="progress-container">
         <h4 className="progress-header">
            {props.skillTitle}
            <span className="percentage">{props.percent}</span>
         </h4>
         <div className="progress-bar__border">
            <div
               className="progress-bar__progress"
               style={{ width: props.percent }}
            />
         </div>
      </li>
   );
}

export default ProgressBar;
