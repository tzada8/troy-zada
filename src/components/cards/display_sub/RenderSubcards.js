import React from "react";

// MENU CONSTANTS FOR SUBCARD TITLES

// SUBCARDS
import CreateSubcards from "./CreateSubcards";

// CONTENT
import Moodivity from "../content/portfolio/subcards/moodivity/Moodivity";
import SudokuSolver from "../content/portfolio/subcards/sudoku_solver/SudokuSolver";
import LiteratureFair from "../content/portfolio/subcards/literature_fair/LiteratureFair";

// DETERMINES WHICH SUBCARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderSubcards(props) {
   return (
      <div>
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
            isActive={props.literatureFair}
            title="Literature Fair"
            content={<LiteratureFair />}
            quotation="Something about experience/learning"
            author="Insert author here"
         />
      </div>
   );
}

export default RenderSubcards;
