import React from "react";

function ProgressBar(props) {
   return (
      <div>
         <div className="progress-container">
            <h4 className="progress-header">Bar 1</h4>
            <h4 className="progress-header percentage">90%</h4>
            <hr className="horizontal-bar__skills" />
         </div>
      </div>
   );
}

export default ProgressBar;
