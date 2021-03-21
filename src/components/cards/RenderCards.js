import React from "react";

// CARDS
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

function RenderCards(props) {
   return (
      <div>
         <Home isOnlyComp={props.home} />
         <Portfolio isActive={props.portfolio} />
         <Skills isActive={props.skills} />
         <Experience isActive={props.experience} />
         <Blog isActive={props.blog} />
         <Contact isActive={props.contact} />
      </div>
   );
}

export default RenderCards;
