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
            quotation="Something about experience/learning"
            author="Insert author here"
         />
         {/* SKILLS */}
         <CreateCards
            isActive={props.skills}
            title={SKILLS}
            content={<Skills />}
            quotation="An eye for an eye will leave the whole world blind"
            author="M.K. Ghandi"
         />
         {/* PORTFOLIO */}
         <CreateCards
            isActive={props.portfolio}
            title={PORTFOLIO}
            content={<Portfolio />}
            quotation="Something about something here"
            author="Insert author here"
         />
         {/* BLOG */}
         <CreateCards
            isActive={props.blog}
            title={BLOG}
            content={<Blog />}
            quotation="Something about reading"
            author="Insert author here"
         />
         {/* CONTACT */}
         <CreateCards
            isActive={props.contact}
            title={CONTACT}
            content={<Contact />}
            quotation="Something about reaching out/discussion"
            author="Insert author here"
         />
         {/* PAGE NOT FOUND */}
         <CreateCards
            isActive={props.pageNotFound}
            title={PAGE_NOT_FOUND}
            content={<PageNotFound />}
            quotation="Something about unable to find"
            author="Insert author here"
         />
      </div>
   );
}

export default RenderCards;
