import React from "react";
import "./Home.css";
import "../Cards.css";
import {
   HOME,
   PHONE,
   EMAIL,
   FACEBOOK_LINK,
   LINKEDIN_LINK,
} from "../../Constants";

function Home() {
   return (
      <div className="card-box home-page">
         <div className="card-container">
            {/* ROUND HEADSHOT IMAGE */}
            <div className="home-img-round" />

            {/* TITLE OF CARD */}
            <h1 className="home-intro-name">Hi, I'm Troy Zada!</h1>
            {/* CURRENT ROLE/POSITION */}
            <h2>Programmer, Lorem, ipsum.</h2>

            <hr className="home-page-separator" />

            {/* BRIEF OVERALL DESCRIPTION */}
            <p className="card-paragraphs">
               A passionate, hardworking, and dedicated Management Engineering
               Student at the University of Waterloo. Lorem ipsum dolor sit amet
               consectetur, adipisicing elit. Eaque, eius.
            </p>

            {/* SOCIAL ICON LINKS */}
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
         </div>
      </div>
   );
}

export default Home;
