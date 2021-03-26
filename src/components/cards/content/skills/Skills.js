import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProgressBar from "./progress_bar/ProgressBar";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";

// WHEN CARD IS FIRST OPENED, HAVE ANIMATION THAT BRINGS ALL BARS TO RESPECTIVE PERCENT
// FIX PERCENT VALUES FOR ALL SKILLS

function Skills() {
   return (
      <div>
         {/* GROUP OF INTERPERSONAL SKILLS */}
         <Subtitle icon="fas fa-users" label="Interpersonal Skills" />
         <ul>
            <ProgressBar skillTitle="Communcation" percent="30%" />
            <ProgressBar skillTitle="Problem Solving" percent="30%" />
            <ProgressBar skillTitle="Time Management" percent="30%" />
            <ProgressBar skillTitle="Punctuality" percent="30%" />
            <ProgressBar skillTitle="Detail-Oriented" percent="30%" />
            <ProgressBar skillTitle="Cross-Functional" percent="30%" />
            <ProgressBar skillTitle="Teamwork" percent="30%" />
         </ul>

         <GroupsDivider />

         {/* GROUP OF PROFESSIONAL SKILLS */}
         <Subtitle icon="fas fa-cogs" label="Professional Skills" />
         <ul>
            <ProgressBar skillTitle="Java" percent="30%" />
            <ProgressBar skillTitle="Python" percent="30%" />
            <ProgressBar skillTitle="Excel VBA" percent="30%" />
            <ProgressBar skillTitle="HTML" percent="30%" />
            <ProgressBar skillTitle="CSS" percent="30%" />
            <ProgressBar skillTitle="JavaScript" percent="30%" />
            <ProgressBar skillTitle="R" percent="30%" />
         </ul>
      </div>
   );
}

export default Skills;
