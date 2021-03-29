import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";
import DownloadResume from "../extra_components/download_resume/DownloadResume";
import "./Experience.css";

function Experience() {
   return (
      <div>
         <DownloadResume />
         <Subtitle icon="fas fa-university" label="Education" />

         <Subtitle icon="fas fa-briefcase" label="Work Experience" />

         <Subtitle icon="fas fa-award" label="Awards" />

         <DownloadResume />
      </div>
   );
}

export default Experience;
