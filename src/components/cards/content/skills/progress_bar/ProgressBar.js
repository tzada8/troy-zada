import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
   return (
      <div>
         <div className="progress-container">
            <h4 className="progress-header">{props.skillTitle}</h4>
            <h4 className="percentage">{props.percent}</h4>
            <br />
            <hr
               className="horizontal-bar__skills"
               style={{
                  background:
                     "linear-gradient(to right, var(--DARK_BLUE) " +
                     props.percent +
                     ", var(--WHITE) " +
                     props.percent +
                     ")",
               }}
            />
         </div>
      </div>
   );
}

export default ProgressBar;
