import React from "react";

import CloseButton from "../../button/CloseButton";
import HorizontalBar from "../../horizontal-bar/HorizontalBar";
import "./CreateSubcards.css";

// CREATES CARD FRAME WITH APPROPRIATE CONTENT
function CreateSubcards(props) {
   return (
      <div
         className={
            props.isActive ? "card-box-top other-page-top" : "card-box-top"
         }
      >
         <div className="card-container">
            {/* HEADER FOR BACK TO PREVIOUS PAGE */}
            <div className="close-card-button">
               <CloseButton backTo={props.backTo} />
            </div>
            <HorizontalBar light />

            {/* REST OF CONTENT */}
            <div className="card-content">{props.content}</div>

            <HorizontalBar light />
         </div>
      </div>
   );
}

export default CreateSubcards;
