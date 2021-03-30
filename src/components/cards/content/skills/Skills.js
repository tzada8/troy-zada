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
            <ProgressBar skillTitle="Problem Solving" percent="88%" />
            <ProgressBar skillTitle="Willingness to Learn" percent="100%" />
            <ProgressBar skillTitle="Time Management" percent="90%" />
            <ProgressBar skillTitle="Punctuality" percent="86%" />
            <ProgressBar skillTitle="Detail-Oriented" percent="96%" />
            <ProgressBar skillTitle="Cross-Functional" percent="82%" />
            <ProgressBar skillTitle="Teamwork" percent="89%" />
         </ul>

         <GroupsDivider />

         {/* GROUP OF PROFESSIONAL SKILLS */}
         <Subtitle icon="fas fa-cogs" label="Professional Skills" />
         <ul>
            <ProgressBar skillTitle="Java" percent="76%" />
            <ProgressBar skillTitle="Python" percent="74%" />
            <ProgressBar skillTitle="HTML" percent="84%" />
            <ProgressBar skillTitle="CSS" percent="80%" />
            <ProgressBar skillTitle="Excel VBA" percent="46%" />
            <ProgressBar skillTitle="React" percent="74%" />
            <ProgressBar skillTitle="JavaScript" percent="68%" />
            <ProgressBar skillTitle="R" percent="33%" />
         </ul>
      </div>
   );
}

export default Skills;
