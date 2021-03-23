import React from "react";

function CreateCards(props) {
   return (
      <div className={props.isActive ? "card-box other-page" : "card-box"}>
         <div className="card-container">
            {/* TITLE OF CARD */}
            <div className="card-title">
               <h1>{props.title}</h1>
               <hr className="horizontal-bar__title" />
            </div>

            {/* REST OF CONTENT */}
            <div className="card-content">{props.content}</div>
         </div>
      </div>
   );
}

export default CreateCards;
