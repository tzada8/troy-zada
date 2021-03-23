import React from "react";
import TypeOfSkills from "./TypeOfSkills";
import "./Skills.css";
import "../Cards.css";
import { SKILLS } from "../../Constants";

function Skills(props) {
   return (
      <div className={props.isActive ? "card-box other-page" : "card-box"}>
         <div className="card-container">
            {/* TITLE OF CARD */}
            <div className="card-title">
               <h1>{SKILLS}</h1>
               <hr className="horizontal-bar__title" />
            </div>

            {/* REST OF CONTENT */}
            <div className="card-content">
               <TypeOfSkills />
            </div>
         </div>
      </div>
   );
}

export default Skills;
