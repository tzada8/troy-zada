import React from "react";
import ProgressBar from "./ProgressBar";
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
               <div className="group-skills-container">
                  {/* GROUP OF TECHNICAL SKILLS */}
                  <a
                     href="/"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Facebook"
                  >
                     <i className="fab fa-facebook-square social-icon" />
                  </a>
                  <h3>Type Of Skills</h3>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
