import React from "react";
import ProjectPost from "../project_post/ProjectPost";
import { portfolioData } from "../PortfolioData";
import "./ProjectContent.css";

function SudokuSolver() {
   return (
      <div>
         <ProjectPost
            projectTitle={portfolioData.sudokuSolver.title}
            src={portfolioData.sudokuSolver.image}
            date={portfolioData.sudokuSolver.date}
            github={portfolioData.sudokuSolver.github}
         />
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            repudiandae aspernatur atque delectus fugit? Eaque deserunt
            obcaecati ad perferendis nam, debitis temporibus? Delectus beatae
            alias velit eos id reiciendis libero? Totam, iste praesentium
            debitis dicta quibusdam nihil ducimus maiores minima ipsum! Iure
            neque assumenda itaque voluptatum expedita accusantium non animi
            doloribus magni ratione. Animi autem fugit dolore! Deleniti
            voluptates dolor ut libero eum, architecto officia quidem delectus
            vero, animi nobis repellendus dicta quibusdam dolores, consequuntur
            ducimus commodi facere exercitationem! Tempora eum sunt quam itaque,
            hic vero eius odio libero quisquam placeat reiciendis nostrum.
            Beatae at aperiam accusantium! In, nobis dolor?
         </p>
      </div>
   );
}

export default SudokuSolver;
