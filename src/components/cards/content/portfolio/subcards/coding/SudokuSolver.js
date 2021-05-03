import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioData } from "../../PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

function SudokuSolver() {
   return (
      <div>
         <CodingProjectPost
            projectTitle={portfolioData.sudokuSolver.title}
            src={portfolioData.sudokuSolver.image}
            date={portfolioData.sudokuSolver.date}
            github={portfolioData.sudokuSolver.github}
            youtube={portfolioData.sudokuSolver.youtube}
         />
         <Subheading subheading="About the Application" />
         <Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
      </div>
   );
}

export default SudokuSolver;
