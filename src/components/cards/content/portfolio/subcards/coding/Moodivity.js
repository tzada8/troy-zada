import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioData } from "../../PortfolioData";
import "../ProjectContent.css";

function Moodivity() {
   return (
      <div>
         <CodingProjectPost
            projectTitle={portfolioData.moodivity.title}
            src={portfolioData.moodivity.image}
            date={portfolioData.moodivity.date}
            github={portfolioData.moodivity.github}
            youtube={portfolioData.moodivity.youtube}
         />
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, reprehenderit excepturi! Repellat quia delectus non.
            Quibusdam delectus vitae repellendus animi tempore iste culpa quae
            labore pariatur. Id totam quaerat, accusamus in nobis modi eligendi
            facere laborum et aliquid soluta harum rerum earum delectus officiis
            voluptate saepe dicta fugiat est, corrupti esse. Aut a quibusdam
            alias eum, excepturi quas, modi illo perspiciatis placeat voluptate
            explicabo tempora harum inventore, voluptatem corporis iste labore
            nulla sed earum assumenda ab sit. Pariatur corporis officia quia,
            laudantium recusandae deserunt aliquid cum doloremque omnis
            aspernatur. Architecto culpa nemo, obcaecati consequatur ex sunt
            facere quas quaerat tenetur?
         </p>
      </div>
   );
}

export default Moodivity;
