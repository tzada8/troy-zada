import React from "react";
import "./Home.css";
import "../Cards.css";
import {
   HOME,
   PHONE,
   EMAIL,
   FACEBOOK_LINK,
   LINKEDIN_LINK,
   FIRST_NAME,
   LAST_NAME,
} from "../../Constants";

function Home() {
   return (
      <div className="card-box home-page">
         <div className="card-container">
            {/* ROUND HEADSHOT IMAGE */}
            <div className="home-img-round" />
            {/* TITLE OF CARD */}
            <div className="home-intro-title">
               <h2 className="home-hello-welcome">Hello & Welcome, I am</h2>
               {/* Troy Zada, a Student, a Programmer, ... */}
               <h1 className="home-intro-name">
                  {FIRST_NAME} {LAST_NAME}!
               </h1>
               {/* CURRENT ROLE/POSITION */}
               <h4 className="home-intro-program">
                  Management Engineering Student @ University of Waterloo
               </h4>
               <hr className="horizontal-bar-fade" />
            </div>

            {/* BRIEF OVERALL DESCRIPTION */}
            <p className="card-paragraphs">
               Motivated and hard-working engineering student with a passion for
               programming, innovation, and optimizing processes. I am eager to
               learn and enjoy being able to work out and find solutions to
               difficult problems. "Live as if you were to die tomorrow. Learn
               as if you were to live forever." - Mahatma Gandhi
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
