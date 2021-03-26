import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProjectCard from "./project_card/ProjectCard";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";

// PICTURES FOR EACH PROJECT PREVIEW
import item1_Moodivity from "../../../../images/Solo.JPG";
import item2_SudokuSolver from "../../../../images/headshot_1.png";
import item3_LiteratureFair from "../../../../images/headshot_2.png";

function Portfolio() {
   return (
      <div>
         {/* GROUP OF CODING PROJECTS */}
         <Subtitle icon="fas fa-code" label="Coding Projects" />
         <ul>
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
         </ul>

         <GroupsDivider />

         {/* GROUP OF COMMUNICATION PROJECTS */}
         <Subtitle icon="fas fa-comments" label="Communication Projects" />
         <ul>
            <ProjectCard
               path="#"
               projectTitle="Literature Fair"
               src={item3_LiteratureFair}
               text="This project focuses on the literary theory of existentialism involving how each individual is in charge of their own lives based on their own decisions"
            />
         </ul>
      </div>
   );
}

export default Portfolio;
