import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioData } from "../../PortfolioData";
import "../ProjectContent.css";

function BlackJack() {
   return (
      <div>
         <CodingProjectPost
            projectTitle={portfolioData.blackJack.title}
            src={portfolioData.blackJack.image}
            date={portfolioData.blackJack.date}
            github={portfolioData.blackJack.github}
            youtube={portfolioData.blackJack.youtube}
         />
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quam
            voluptatum corporis veritatis laborum esse nesciunt tenetur tempora
            optio voluptatibus deserunt dolorem consequuntur nemo ea quis
            adipisci, a aperiam ad vitae. Modi mollitia ullam, fugiat blanditiis
            pariatur dicta omnis recusandae exercitationem ab temporibus sequi,
            unde natus rerum nulla repudiandae cupiditate molestias quidem
            architecto vero, eos eius. Itaque eum delectus quibusdam qui
            asperiores esse, quas, ullam ea beatae voluptates quo inventore hic
            id vel? Cum reprehenderit magnam at dolorum rerum autem odit ad
            incidunt assumenda quaerat dolor fugiat eos deleniti aut, nobis
            tempora delectus veniam iusto consequatur officia voluptas quo
            nostrum!
         </p>
      </div>
   );
}

export default BlackJack;
