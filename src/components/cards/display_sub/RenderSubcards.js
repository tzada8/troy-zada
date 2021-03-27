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
            backTo="/portfolio"
            title="Troy Zada Website"
            content={<TroyZada />}
         />
         <CreateSubcards
            isActive={props.moodivity}
            backTo="/portfolio"
            title="Moodivity"
            content={<Moodivity />}
         />
         <CreateSubcards
            isActive={props.sudokuSolver}
            backTo="/portfolio"
            title="Sudoku Solver"
            content={<SudokuSolver />}
         />
         <CreateSubcards
            isActive={props.blackJack}
            backTo="/portfolio"
            title="BlackJack"
            content={<BlackJack />}
         />
         <CreateSubcards
            isActive={props.canastampi}
            backTo="/portfolio"
            title="Canastampi Website"
            content={<Canastampi />}
         />
         <CreateSubcards
            isActive={props.dss}
            backTo="/portfolio"
            title="Decision Support System"
            content={<DSS />}
         />

         {/* COMMUNICATION PROJECTS */}
         <CreateSubcards
            isActive={props.literatureFair}
            backTo="/portfolio"
            title="Literature Fair"
            content={<LiteratureFair />}
         />
         <CreateSubcards
            isActive={props.industry4}
            backTo="/portfolio"
            title="Design Team: Industry 4.0"
            content={<Industry4 />}
         />
      </div>
   );
}

export default RenderSubcards;
