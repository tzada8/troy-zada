import React from "react";
import ProgressBar from "./progress_bar/ProgressBar";
import "./Skills.css";
import "../Cards.css";
import { SKILLS } from "../../Constants";

// WHEN CARD IS FIRST OPENED, HAVE ANIMATION THAT BRINGS ALL BARS TO RESPECTIVE PERCENT
// FIX PERCENT VALUES FOR ALL SKILLS

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
                  <ProgressBar skillTitle="Communcation" percent="30%" />
                  <ProgressBar skillTitle="Problem Solving" percent="30%" />
                  <ProgressBar skillTitle="Time Management" percent="30%" />
                  <ProgressBar skillTitle="Punctuality" percent="30%" />
                  <ProgressBar skillTitle="Detail-Oriented" percent="30%" />
                  <ProgressBar skillTitle="Cross-Functional" percent="30%" />
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
                  <ProgressBar skillTitle="Java" percent="30%" />
                  <ProgressBar skillTitle="Python" percent="30%" />
                  <ProgressBar skillTitle="Excel VBA" percent="30%" />
                  <ProgressBar skillTitle="HTML" percent="30%" />
                  <ProgressBar skillTitle="CSS" percent="30%" />
                  <ProgressBar skillTitle="JavaScript" percent="30%" />
                  <ProgressBar skillTitle="R" percent="30%" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
