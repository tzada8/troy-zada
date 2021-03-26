import React from "react";

// NAVIGATION
import Navbar from "./components/navbar/Navbar";

// RENDER CARDS
import RenderCards from "./components/cards/display_main/RenderCards";
import RenderSubcards from "./components/cards/display_sub/RenderSubcards";

function Display(props) {
   return (
      <div>
         <RenderCards
            home={props.home}
            experience={props.experience}
            skills={props.skills}
            portfolio={props.portfolio}
            blog={props.blog}
            contact={props.contact}
            pageNotFound={props.pageNotFound}
         />
         <Navbar startPos={props.startPos} />
         <RenderSubcards
            moodivity={props.moodivity}
            sudokuSolver={props.sudokuSolver}
         />
      </div>
   );
}

export default Display;
