import React from "react";

import CloseButton from "../../button/CloseButton";
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
            <hr className="horizontal-bar__subcard-top" />

            {/* REST OF CONTENT */}
            <div className="card-content">{props.content}</div>

            <hr className="horizontal-bar__subcard-bottom" />
         </div>
      </div>
   );
}

export default CreateSubcards;
