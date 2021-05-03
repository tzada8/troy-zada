import React from "react";
import ComProjectPost from "../../project_post/communication/ComProjectPost";
import { portfolioData } from "../../PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

function LiteratureFair() {
   return (
      <div>
         <ComProjectPost
            projectTitle={portfolioData.literatureFair.title}
            src={portfolioData.literatureFair.image}
            date={portfolioData.literatureFair.date}
         />
         <Subheading subheading="About the Application" />
         <Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
      </div>
   );
}

export default LiteratureFair;
