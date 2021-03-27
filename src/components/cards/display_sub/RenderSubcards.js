import React from "react";

// MENU CONSTANTS FOR SUBCARD TITLES

// SUBCARDS
import CreateSubcards from "./CreateSubcards";

// CODING CONTENT
import TroyZada from "../content/portfolio/subcards/TroyZada";
import Moodivity from "../content/portfolio/subcards/Moodivity";
import SudokuSolver from "../content/portfolio/subcards/SudokuSolver";
import BlackJack from "../content/portfolio/subcards/BlackJack";
import Canastampi from "../content/portfolio/subcards/Canastampi";
import DSS from "../content/portfolio/subcards/DSS";

// COMMUNICATION CONTENT
import LiteratureFair from "../content/portfolio/subcards/LiteratureFair";
import Industry4 from "../content/portfolio/subcards/Industry4";

// DETERMINES WHICH SUBCARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderSubcards(props) {
   return (
      <div>
         {/* CODING PROJECTS */}
         <CreateSubcards
            isActive={props.troyZada}
            title="Troy Zada Website"
            content={<TroyZada />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
         <CreateSubcards
            isActive={props.moodivity}
            title="Moodivity"
            content={<Moodivity />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
         <CreateSubcards
            isActive={props.sudokuSolver}
            title="Sudoku Solver"
            content={<SudokuSolver />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
         <CreateSubcards
            isActive={props.blackJack}
            title="BlackJack"
            content={<BlackJack />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
         <CreateSubcards
            isActive={props.canastampi}
            title="Canastampi Website"
            content={<Canastampi />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
         <CreateSubcards
            isActive={props.dss}
            title="Decision Support System"
            content={<DSS />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />

         {/* COMMUNICATION PROJECTS */}
         <CreateSubcards
            isActive={props.literatureFair}
            title="Literature Fair"
            content={<LiteratureFair />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
         <CreateSubcards
            isActive={props.industry4}
            title="Design Team: Industry 4.0"
            content={<Industry4 />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
      </div>
   );
}

export default RenderSubcards;
