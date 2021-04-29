import React from "react";
import ComProjectPost from "../../project_post/communication/ComProjectPost";
import { portfolioData } from "../../PortfolioData";
import "../ProjectContent.css";

function Industry4() {
   return (
      <div>
         <ComProjectPost
            projectTitle={portfolioData.industry4.title}
            src={portfolioData.industry4.image}
            date={portfolioData.industry4.date}
         />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            assumenda veritatis, quasi inventore nostrum voluptas rem unde
            tempora maxime reprehenderit nobis laudantium quas, consequuntur
            perferendis accusamus perspiciatis nemo. Nulla, magnam. Debitis,
            accusantium! Ratione veniam hic quidem, non, eius dignissimos optio
            consequatur aperiam quaerat aspernatur sapiente ullam officia
            incidunt id alias ab sequi atque itaque porro? Consectetur neque,
            laudantium odit nobis qui dolorem. Ex voluptatum nisi quos sapiente
            ullam veritatis, iure totam dolores ipsum soluta quae quis esse,
            aliquid eum deserunt illo ut praesentium repellat reiciendis
            cupiditate fugiat omnis cumque! Minus modi perspiciatis temporibus
            exercitationem soluta! Eum debitis consequuntur accusantium quos!
         </p>
      </div>
   );
}

export default Industry4;
