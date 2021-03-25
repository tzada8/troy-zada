import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProjectCard from "./project_card/ProjectCard";
import "./Portfolio.css";

// PICTURES FOR EACH PROJECT PREVIEW
import item1_Moodivity from "../../../../images/Solo.JPG";
import item2_SudokuSolver from "../../../../images/headshot_1.png";

function Portfolio() {
   return (
      <div>
         <Subtitle icon="fas fa-cogs" label="Coding Projects" />
         <ProjectCard
            path="#"
            projectTitle="Moodivity"
            src={item1_Moodivity}
            text="This project was made in November 2020 using the React Framework as well as Django"
         />
         <ProjectCard
            path="#"
            projectTitle="Sudoku Solver"
            src={item2_SudokuSolver}
            text="This project was made using the Backtracking algorithm and can solve any sudoku board"
         />
      </div>
   );
}

export default Portfolio;
