import React from "react";
import "./WorkCard.css";

function WorkCard(props) {
   // title
   // company
   // duration
   // description
   return (
      <div className="work-card-container">
         <h3 className="work-title-company">{props.title}</h3>
         <h4 className="work-duration">
            {props.company}
            {props.duration}
         </h4>
         <hr className="horizontal-bar__work" />
         <p>{props.description}</p>
      </div>
   );
}

export default WorkCard;