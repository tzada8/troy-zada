import React from "react";
import "./CreateSubcards.css";

// CREATES CARD FRAME WITH APPROPRIATE CONTENT
function CreateSubcards(props) {
   return (
      <div
         className={props.isActive ? "card-box-top other-page" : "card-box-top"}
      >
         <div className="card-container">
            {/* TITLE OF CARD */}
            <div className="card-title">
               <h1>{props.title}</h1>
               <hr className="horizontal-bar__title" />
            </div>

            {/* REST OF CONTENT */}
            <div className="card-content">{props.content}</div>

            {/* FOOTER FOR QUOTATION */}
            <hr className="horizontal-bar__footer" />
            <p className="footer-quote">
               {'"'}
               {props.quotation}
               {'"'} - <span className="author">{props.author}</span>
            </p>
         </div>
      </div>
   );
}

export default CreateSubcards;
