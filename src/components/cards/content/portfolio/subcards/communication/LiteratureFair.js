import React from "react";
import ComProjectPost from "../../project_post/communication/ComProjectPost";
import { portfolioData } from "../../PortfolioData";
import "../ProjectContent.css";

function LiteratureFair() {
   return (
      <div>
         <ComProjectPost
            projectTitle={portfolioData.literatureFair.title}
            src={portfolioData.literatureFair.image}
            date={portfolioData.literatureFair.date}
         />
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            excepturi exercitationem natus consequuntur porro nobis aut eos,
            quas autem optio quae a dolorem nam, aperiam assumenda consequatur
            iste nulla eius officia expedita quis quisquam! Expedita quod,
            perspiciatis minus nesciunt cupiditate magni quo est dolores
            pariatur provident doloribus obcaecati repudiandae, quisquam hic id
            adipisci omnis! Asperiores eaque laboriosam assumenda quis, ipsum
            laudantium deleniti dicta qui illo ipsa officia beatae. Beatae
            tempore illum voluptatum praesentium aspernatur ipsum voluptas
            maiores fugit et? Iste, libero magnam temporibus cumque mollitia
            blanditiis placeat dolorem unde quia? Id provident asperiores
            doloremque itaque iusto. Possimus libero veniam deleniti?
         </p>
      </div>
   );
}

export default LiteratureFair;
