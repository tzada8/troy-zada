import React from "react";

// MENU CONSTANTS FOR SUBCARD TITLES

// SUBCARDS
import CreateSubcards from "./CreateSubcards";

// CONTENT
import Moodivity from "./moodivity/Moodivity";
import SudokuSolver from "./sudoku_solver/SudokuSolver";

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
      </div>
   );
}

export default RenderSubcards;
