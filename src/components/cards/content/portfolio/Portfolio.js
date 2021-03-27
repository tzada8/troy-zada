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
               path="/portfolio/troy-zada"
               projectTitle="Troy Zada Website"
               src={item3_LiteratureFair}
               text="This project was made using HTML, CSS, JavaScript, and the React framework in order to make this website"
            />
            <ProjectCard
               path="/portfolio/moodivity"
               projectTitle="Moodivity"
               src={item1_Moodivity}
               text="This project was made in November 2020 using the React Framework as well as Django"
            />
            <ProjectCard
               path="/portfolio/sudoku-solver"
               projectTitle="Sudoku Solver"
               src={item2_SudokuSolver}
               text="This project was made using the Backtracking algorithm and can solve any sudoku board"
            />
            <ProjectCard
               path="/portfolio/blackjack"
               projectTitle="BlackJack"
               src={item3_LiteratureFair}
               text="This project was made using Python in addition to Python's GUI framework Tkinter"
            />
            <ProjectCard
               path="/portfolio/canastampi"
               projectTitle="Canastampi"
               src={item1_Moodivity}
               text="This website was made for the company Canastampi using HTML, CSS, JavaScript, and the React framework"
            />
            <ProjectCard
               path="/portfolio/decision-support-system"
               projectTitle="Decision Support System"
               src={item2_SudokuSolver}
               text="This project was made using Excel VBA in order to make a project tool that aids user completing group projcets in an efficient manner"
            />
         </ul>

         <GroupsDivider />

         {/* GROUP OF COMMUNICATION PROJECTS */}
         <Subtitle icon="fas fa-comments" label="Communication Projects" />
         <ul>
            <ProjectCard
               path="/portfolio/literature-fair"
               projectTitle="Literature Fair"
               src={item3_LiteratureFair}
               text="This project focuses on the literary theory of existentialism involving how each individual is in charge of their own lives based on their own decisions"
            />
            <ProjectCard
               path="/portfolio/industry4"
               projectTitle="Industry4.0"
               src={item1_Moodivity}
               text="This project involved marketing and reaching out to fellow high school about a competition regarding optimization of factory procedures"
            />
         </ul>
      </div>
   );
}

export default Portfolio;
