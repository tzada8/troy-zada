import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProjectCard from "./project_card/ProjectCard";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";
import { portfolioData } from "./PortfolioData";

function Portfolio() {
   return (
      <div>
         {/* GROUP OF CODING PROJECTS */}
         <Subtitle icon="fas fa-code" label="Coding Projects" />
         <ul>
            <ProjectCard
               path="/portfolio/moodivity"
               projectTitle={portfolioData.moodivity.title}
               src={portfolioData.moodivity.image}
               text="This project was made in November 2020 using the React Framework as well as Django"
            />
            <ProjectCard
               path="/portfolio/troy-zada"
               projectTitle={portfolioData.troyZadaWebsite.title}
               src={portfolioData.troyZadaWebsite.image}
               text="This project was made using HTML, CSS, JavaScript, and the React framework in order to make this website"
            />
            <ProjectCard
               path="/portfolio/pathfinding"
               projectTitle={portfolioData.pathfinding.title}
               src={portfolioData.pathfinding.image}
               text="Used Java including the Swing GUI to create a program that visually compares pathfinding algorithms"
            />
            <ProjectCard
               path="/portfolio/sudoku-solver"
               projectTitle={portfolioData.sudokuSolver.title}
               src={portfolioData.sudokuSolver.image}
               text="This project was made using the Backtracking algorithm and can solve any sudoku board"
            />
            <ProjectCard
               path="/portfolio/blackjack"
               projectTitle={portfolioData.blackJack.title}
               src={portfolioData.blackJack.image}
               text="This project was made using Python in addition to Python's GUI framework Tkinter"
            />
            <ProjectCard
               path="/portfolio/decision-support-system"
               projectTitle={portfolioData.dss.title}
               src={portfolioData.dss.image}
               text="This project was made using Excel VBA in order to make a project tool that aids user completing group projcets in an efficient manner"
            />
         </ul>

         <GroupsDivider />

         {/* GROUP OF COMMUNICATION PROJECTS */}
         <Subtitle icon="fas fa-comments" label="Communication Projects" />
         <ul>
            <ProjectCard
               path="/portfolio/literature-fair"
               projectTitle={portfolioData.literatureFair.title}
               src={portfolioData.literatureFair.image}
               text="This project focuses on the literary theory of existentialism involving how each individual is in charge of their own lives based on their own decisions"
            />
            <ProjectCard
               path="/portfolio/industry4"
               projectTitle={portfolioData.industry4.title}
               src={portfolioData.industry4.image}
               text="This project involved marketing and reaching out to fellow high school about a competition regarding optimization of factory procedures"
            />
         </ul>
      </div>
   );
}

export default Portfolio;
