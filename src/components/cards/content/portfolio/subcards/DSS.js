import React from "react";
import ProjectPost from "../project_post/ProjectPost";
import { portfolioData } from "../PortfolioData";
import "./ProjectContent.css";

function DSS() {
   return (
      <div>
         <ProjectPost
            projectTitle={portfolioData.dss.title}
            src={portfolioData.dss.image}
            date={portfolioData.dss.date}
            github={portfolioData.dss.github}
         />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere qui
            quos, quam suscipit ut dolores, facilis, voluptatibus aut quia velit
            laboriosam? Illo incidunt adipisci dolorum dolorem voluptatum,
            tenetur suscipit? Iusto officia et sit asperiores eaque aut id nisi
            porro perspiciatis ad, architecto fugiat maxime quasi at magnam,
            facilis natus ducimus suscipit! Adipisci reiciendis delectus, porro
            aliquam, necessitatibus labore tempore perferendis numquam velit
            voluptate modi beatae praesentium cum magnam minus. Animi sed
            numquam, autem quam repellat aut, nisi saepe facere dolor, soluta
            natus harum laboriosam voluptate. Facere quasi modi eaque laboriosam
            optio nam saepe tenetur autem, deleniti, dolorem est qui aspernatur!
         </p>
      </div>
   );
}

export default DSS;
