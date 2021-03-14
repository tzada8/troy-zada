import React from "react";
import "./SocialIcons.css";
import { FACEBOOK_LINK, LINKEDIN_LINK } from "../Constants";

function SocialIcons() {
   return (
      <div className="social-media">
         <div className="social-media-wrap">
            {/* ICON FOR FACEBOOK */}
            <a
               className="social-icon-link facebook"
               href={FACEBOOK_LINK}
               target="_blank"
               rel="noreferrer"
               aria-label="Facebook"
            >
               <i className="fab fa-facebook-f"></i>
            </a>

            {/* ICON FOR LINKEDIN */}
            <a
               className="social-icon-link linkedin"
               href={LINKEDIN_LINK}
               target="_blank"
               rel="noreferrer"
               aria-label="LinkedIn"
            >
               <i className="fab fa-linkedin"></i>
            </a>
         </div>
      </div>
   );
}

export default SocialIcons;
