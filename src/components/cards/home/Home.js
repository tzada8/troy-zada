import React from "react";
import "./Home.css";
import "../display_main/CreateCards.css";
import {
   EMAIL,
   FACEBOOK_LINK,
   LINKEDIN_LINK,
   FULL_NAME,
} from "../../Constants";

function Home(props) {
   return (
      <div
         className={
            props.isOnlyComp
               ? "card-box home-vis"
               : "card-box home-vis home-loc"
         }
      >
         <div className="card-container">
            {/* ROUND HEADSHOT IMAGE */}
            <div
               className={
                  props.isOnlyComp
                     ? "headshot1 home-img-round"
                     : "headshot2 home-img-round"
               }
            />
            {/* TITLE OF CARD */}
            <div className="home-intro-title">
               {/* Troy Zada, an Engineering Student, a Programmer, Lifelong Learner, ... */}
               <h1 className="home-intro-name">{FULL_NAME}</h1>
               {/* CURRENT ROLE/POSITION */}
               <h4 className="home-intro-program">
                  Management Engineering Student @ University of Waterloo
               </h4>
               <hr className="horizontal-bar__fade" />
            </div>

            {/* BRIEF OVERALL DESCRIPTION */}
            <p id="home-paragraph">
               Dedicated and hard-working engineering student with a passion for
               programming, innovation, optimization, and learning. "Live as if
               you were to die tomorrow. Learn as if you were to live forever."
               - M.K. Gandhi
            </p>

            {/* SOCIAL ICON LINKS */}
            <div className="social-media">
               <div className="social-media-container">
                  {/* ICON FOR FACEBOOK */}
                  <div className="icon-frame">
                     <a
                        href={FACEBOOK_LINK}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                     >
                        <i className="fab fa-facebook-square social-icon" />
                     </a>
                  </div>
                  {/* ICON FOR EMAIL */}
                  <div className="icon-frame">
                     <span id="email-text">{EMAIL}</span>
                     <a
                        id="envelope-icon"
                        href={"mailto:" + EMAIL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email"
                     >
                        <i className="fas fa-envelope-square social-icon" />
                     </a>
                  </div>
                  {/* ICON FOR LINKEDIN */}
                  <div className="icon-frame">
                     <a
                        href={LINKEDIN_LINK}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                     >
                        <i className="fab fa-linkedin social-icon" />
                     </a>
                  </div>
               </div>
            </div>

            <p id="copyright">
               Copyright © 2021 Troy Zada. All Rights Reserved.
            </p>
         </div>
      </div>
   );
}

export default Home;
