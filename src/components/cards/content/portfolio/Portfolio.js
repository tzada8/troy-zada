import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProjectCard from "./project_card/ProjectCard";
import "./Portfolio.css";

// PICTURES FOR EACH PROJECT PREVIEW
import item1_Moodivity from "../../../../images/Solo.JPG";

function Portfolio() {
   return (
      <div>
         <Subtitle icon="fas fa-cogs" label="Coding Projects" />
         <ProjectCard
            path="#"
            projectTitle="Moodivity"
            src={item1_Moodivity}
            text="This project was made in November 2020 using the React Framework as well as Django"
         />
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            aliquam inventore ipsam vel eveniet reprehenderit, voluptates
            excepturi tempora, accusantium hic, sed quod distinctio sequi?
            Eveniet dicta incidunt voluptatum quis quasi voluptate at quidem
            dolor natus architecto sed sequi ut corporis iste minus maxime
            delectus, mollitia cum neque consectetur ad! Rem cumque praesentium
            libero reiciendis animi culpa. Cupiditate similique, perferendis,
            doloribus commodi optio fugiat suscipit tempora, quisquam officiis
            nihil corrupti! Libero perspiciatis earum totam pariatur,
            voluptatibus architecto odit molestiae labore qui hic cum culpa odio
            expedita a sint consequuntur est, fuga accusamus ducimus dolore
            laborum numquam. Sit incidunt blanditiis quod ea?
         </p>
      </div>
   );
}

export default Portfolio;
