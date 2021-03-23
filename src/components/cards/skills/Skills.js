import React from "react";
import ProgressBar from "./progress_bar/ProgressBar";
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
               {/* GROUP OF INTERPERSONAL SKILLS */}
               <div className="group-skills-container">
                  <h3 className="skills-header">
                     <i className="fas fa-users" />
                     Interpersonal Skills
                  </h3>
                  <hr className="horizontal-bar__skills-title" />
                  <ProgressBar skillTitle="Communcation" percent="60%" />
                  <ProgressBar skillTitle="Problem Solving" percent="90%" />
                  <ProgressBar skillTitle="Time Management" percent="90%" />
                  <ProgressBar skillTitle="Punctuality" percent="90%" />
                  <ProgressBar skillTitle="Detail-Oriented" percent="90%" />
               </div>

               {/* DIVIDER BETWEEN SKILL GROUPS */}
               <div className="skills-divider" />

               {/* GROUP OF PROFESSIONAL SKILLS */}
               <div className="group-skills-container">
                  <h3 className="skills-header">
                     <i className="fas fa-cogs" />
                     Professional Skills
                  </h3>
                  <hr className="horizontal-bar__skills-title" />
                  <ProgressBar skillTitle="Java" percent="60%" />
                  <ProgressBar skillTitle="Python" percent="90%" />
                  <ProgressBar skillTitle="Excel VBA" percent="90%" />
                  <ProgressBar skillTitle="HTML" percent="60%" />
                  <ProgressBar skillTitle="CSS" percent="90%" />
                  <ProgressBar skillTitle="JavaScript" percent="90%" />
                  <ProgressBar skillTitle="R" percent="60%" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
