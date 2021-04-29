import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioData } from "../../PortfolioData";
import "../ProjectContent.css";

function Pathfinding() {
   return (
      <div>
         <CodingProjectPost
            projectTitle={portfolioData.pathfinding.title}
            src={portfolioData.pathfinding.image}
            date={portfolioData.pathfinding.date}
            github={portfolioData.pathfinding.github}
            youtube={portfolioData.pathfinding.youtube}
         />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste?
            Dolore, dolorum? Id totam nobis deleniti repellendus aliquid illo
            eligendi asperiores. Praesentium deserunt temporibus expedita hic
            vitae perspiciatis tempore corporis similique aspernatur! Impedit
            enim excepturi delectus itaque odio deleniti odit, provident
            accusamus distinctio voluptas mollitia culpa ullam sapiente soluta!
            Dolores labore suscipit eius placeat consequatur inventore
            repellendus maxime asperiores eaque reprehenderit, vitae
            voluptatibus adipisci hic sunt quo doloribus sapiente eum iure dicta
            ex fuga! Non animi impedit molestiae quisquam tempora ad, quam ut
            labore exercitationem excepturi placeat reiciendis dignissimos
            necessitatibus corrupti, odit fugit corporis ducimus explicabo quas
            voluptate atque perspiciatis.
         </p>
      </div>
   );
}

export default Pathfinding;
