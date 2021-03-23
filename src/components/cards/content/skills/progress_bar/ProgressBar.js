import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
   return (
      <div>
         <div className="progress-container">
            <h4 className="progress-header">{props.skillTitle}</h4>
            <h4 className="percentage">{props.percent}</h4>
            <br />
            <div className="progress-bar__border">
               <div
                  className="progress-bar__progress"
                  style={{ width: props.percent }}
               />
            </div>
         </div>
      </div>
   );
}

export default ProgressBar;
