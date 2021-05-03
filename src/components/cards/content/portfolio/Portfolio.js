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
               text={portfolioData.moodivity.briefDescription}
            />
            <ProjectCard
               path="/portfolio/troy-zada"
               projectTitle={portfolioData.troyZadaWebsite.title}
               src={portfolioData.troyZadaWebsite.image}
               text={portfolioData.troyZadaWebsite.briefDescription}
            />
            <ProjectCard
               path="/portfolio/pathfinding"
               projectTitle={portfolioData.pathfinding.title}
               src={portfolioData.pathfinding.image}
               text={portfolioData.pathfinding.briefDescription}
            />
            <ProjectCard
               path="/portfolio/sudoku-solver"
               projectTitle={portfolioData.sudokuSolver.title}
               src={portfolioData.sudokuSolver.image}
               text={portfolioData.sudokuSolver.briefDescription}
            />
            <ProjectCard
               path="/portfolio/blackjack"
               projectTitle={portfolioData.blackJack.title}
               src={portfolioData.blackJack.image}
               text={portfolioData.blackJack.briefDescription}
            />
            <ProjectCard
               path="/portfolio/decision-support-system"
               projectTitle={portfolioData.dss.title}
               src={portfolioData.dss.image}
               text={portfolioData.dss.briefDescription}
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
               text={portfolioData.literatureFair.briefDescription}
            />
            <ProjectCard
               path="/portfolio/industry4"
               projectTitle={portfolioData.industry4.title}
               src={portfolioData.industry4.image}
               text={portfolioData.industry4.briefDescription}
            />
         </ul>
      </div>
   );
}

export default Portfolio;
