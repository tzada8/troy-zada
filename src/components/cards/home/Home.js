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
            <div className="home-intro-title">
               <h1 className="home-intro-name">
                  Hi, I'm <div className="home-troy-zada">Troy Zada!</div>
               </h1>
               {/* CURRENT ROLE/POSITION */}
               <h2 className="home-intro-qualities">
                  Programmer, Lorem, ipsum.
               </h2>
               <hr className="home-page-separator" />
            </div>

            {/* BRIEF OVERALL DESCRIPTION */}
            <p className="card-paragraphs">
               A passionate, hardworking, and dedicated Management Engineering
               Student at the University of Waterloo. Lorem ipsum dolor sit amet
               consectetur, adipisicing elit. Eaque, eius.
            </p>

            {/* WAYS TO CONTACT */}
            <div className="home-page-contact">
               {/* EMAIL AND PHONE */}
               <div className="home-email-phone">
                  Email: {EMAIL}
                  <br />
                  Phone: {PHONE}
               </div>

               {/* SOCIAL ICON LINKS */}
               <div className="social-media">
                  <div className="social-media-container">
                     {/* ICON FOR FACEBOOK */}
                     <a
                        href={FACEBOOK_LINK}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                     >
                        <i className="fab fa-facebook-square social-icon"></i>
                     </a>
                     {/* ICON FOR LINKEDIN */}
                     <a
                        href={LINKEDIN_LINK}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                     >
                        <i className="fab fa-linkedin social-icon"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
