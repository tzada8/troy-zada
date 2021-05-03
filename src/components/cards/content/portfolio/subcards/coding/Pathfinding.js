import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioData } from "../../PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

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
         <Subheading subheading="About the Application" />
         <Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
      </div>
   );
}

export default Pathfinding;
