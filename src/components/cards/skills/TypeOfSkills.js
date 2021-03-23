import React from "react";
import ProgressBar from "./ProgressBar";
import { FACEBOOK_LINK } from "../../Constants";

function TypeOfSkills(props) {
   return (
      <div>
         <div className="group-skills-container">
            {/* ICON FOR FACEBOOK */}
            <a
               href={FACEBOOK_LINK}
               target="_blank"
               rel="noreferrer"
               aria-label="Facebook"
            >
               <i className="fab fa-facebook-square social-icon" />
            </a>
            <h3>Type Of Skills</h3>
         </div>
      </div>
   );
}

export default TypeOfSkills;
