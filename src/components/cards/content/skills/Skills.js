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
            <ProgressBar skillTitle="Communcation" percent="94%" />
            <ProgressBar skillTitle="Problem Solving" percent="92%" />
            <ProgressBar skillTitle="Willingness to Learn" percent="100%" />
            <ProgressBar skillTitle="Time Management" percent="89%" />
            <ProgressBar skillTitle="Punctuality" percent="88%" />
            <ProgressBar skillTitle="Detail-Oriented" percent="98%" />
            <ProgressBar skillTitle="Cross-Functional" percent="86%" />
            <ProgressBar skillTitle="Teamwork" percent="90%" />
         </ul>

         <GroupsDivider />

         {/* GROUP OF PROFESSIONAL SKILLS */}
         <Subtitle icon="fas fa-cogs" label="Professional Skills" />
         <ul>
            <ProgressBar skillTitle="Java" percent="82%" />
            <ProgressBar skillTitle="Python" percent="74%" />
            <ProgressBar skillTitle="HTML" percent="84%" />
            <ProgressBar skillTitle="CSS" percent="80%" />
            <ProgressBar skillTitle="Excel VBA" percent="58%" />
            <ProgressBar skillTitle="React" percent="78%" />
            <ProgressBar skillTitle="JavaScript" percent="68%" />
            <ProgressBar skillTitle="R" percent="48%" />
         </ul>
      </div>
   );
}

export default Skills;
