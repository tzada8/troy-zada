import React from "react";
import { Link } from "react-router-dom";
import "./CreateSubcards.css";

// CREATES CARD FRAME WITH APPROPRIATE CONTENT
function CreateSubcards(props) {
   return (
      <div
         className={props.isActive ? "card-box-top other-page" : "card-box-top"}
      >
         <div className="card-container">
            {/* HEADER FOR BACK TO PREVIOUS PAGE */}
            <Link to={props.backTo}>
               <i className="fas fa-times close-menu" />
            </Link>
            <hr className="horizontal-bar__subcard-top" />

            {/* REST OF CONTENT */}
            <div className="card-content">{props.content}</div>

            <hr className="horizontal-bar__subcard-bottom" />
         </div>
      </div>
   );
}

export default CreateSubcards;
