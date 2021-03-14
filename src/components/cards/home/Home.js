import React from "react";
import SocialIcons from "../../social/SocialIcons";
import "./Home.css";
import "../Cards.css";
import { HOME, PHONE, EMAIL } from "../../Constants";

function Home() {
   return (
      <div className="card-box home-page">
         <div className="card-container">
            <div className="home-img-round" />

            {/* TITLE OF CARD */}
            <h1 className="home-intro-name">Hi, I'm Troy Zada!</h1>
            {/* CURRENT ROLE/POSITION */}
            <h2>Management Engineering Student @ University of Waterloo</h2>

            <hr className="home-page-separator" />

            {/* BRIEF OVERALL DESCRIPTION */}
            <p className="card-paragraphs">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
               incidunt, cumque aliquid deleniti optio velit at odit aspernatur
               unde ea!
            </p>

            {/* SOCIAL ICON LINKS */}
            <SocialIcons />
         </div>
      </div>
   );
}

export default Home;
