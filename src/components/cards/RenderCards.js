import React from "react";

// MENU CONSTANTS FOR CARD TITLES
import {
   EXPERIENCE,
   SKILLS,
   PORTFOLIO,
   BLOG,
   CONTACT,
   PAGE_NOT_FOUND,
} from "../Constants";

// CARDS
import Home from "./home/Home";
import CreateCards from "./CreateCards";

// CONTENT
import Portfolio from "./content/portfolio/Portfolio";
import Skills from "./content/skills/Skills";
import Experience from "./content/experience/Experience";
import Blog from "./content/blog/Blog";
import Contact from "./content/contact/Contact";
import PageNotFound from "./content/page_not_found/PageNotFound";

// DETERMINES WHICH CARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderCards(props) {
   return (
      <div>
         {/* HOME */}
         <Home isOnlyComp={props.home} />
         {/* EXPERIENCE */}
         <CreateCards
            isActive={props.experience}
            title={EXPERIENCE}
            content={<Experience />}
         />
         {/* SKILLS */}
         <CreateCards
            isActive={props.skills}
            title={SKILLS}
            content={<Skills />}
         />
         {/* PORTFOLIO */}
         <CreateCards
            isActive={props.portfolio}
            title={PORTFOLIO}
            content={<Portfolio />}
         />
         {/* BLOG */}
         <CreateCards isActive={props.blog} title={BLOG} content={<Blog />} />
         {/* CONTACT */}
         <CreateCards
            isActive={props.contact}
            title={CONTACT}
            content={<Contact />}
         />
         {/* PAGE NOT FOUND */}
         <CreateCards
            isActive={props.pageNotFound}
            title={PAGE_NOT_FOUND}
            content={<PageNotFound />}
         />
      </div>
   );
}

export default RenderCards;
