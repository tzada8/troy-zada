import React from "react";
import ProgressBar from "./progress_bar/ProgressBar";
import "./Skills.css";

// WHEN CARD IS FIRST OPENED, HAVE ANIMATION THAT BRINGS ALL BARS TO RESPECTIVE PERCENT
// FIX PERCENT VALUES FOR ALL SKILLS

function Skills() {
   return (
      <div>
         {/* GROUP OF INTERPERSONAL SKILLS */}
         <div className="group-skills-container">
            <h3 className="skills-header">
               <i className="fas fa-users" />
               Interpersonal Skills
            </h3>
            <hr className="horizontal-bar__skills-title" />
            <ul>
               <li>
                  <ProgressBar skillTitle="Communcation" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Problem Solving" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Time Management" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Punctuality" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Detail-Oriented" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Cross-Functional" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Teamwork" percent="30%" />
               </li>
            </ul>
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
            <ul>
               <li>
                  <ProgressBar skillTitle="Java" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Python" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="Excel VBA" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="HTML" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="CSS" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="JavaScript" percent="30%" />
               </li>
               <li>
                  <ProgressBar skillTitle="R" percent="30%" />
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Skills;
