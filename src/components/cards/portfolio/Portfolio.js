import React from "react";
import "./Portfolio.css";
import "../Cards.css";
import { PORTFOLIO } from "../../Constants";

function Resume(props) {
   return (
      <div className={props.isActive ? "card-box other-page" : "card-box"}>
         <div className="card-container">
            {/* TITLE OF CARD */}
            <div className="card-title">
               <h1>{PORTFOLIO}</h1>
            </div>

            {/* REST OF CONTENT */}
            <div className="card-content">
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam aliquam inventore ipsam vel eveniet reprehenderit,
                  voluptates excepturi tempora, accusantium hic, sed quod
                  distinctio sequi? Eveniet dicta incidunt voluptatum quis quasi
                  voluptate at quidem dolor natus architecto sed sequi ut
                  corporis iste minus maxime delectus, mollitia cum neque
                  consectetur ad! Rem cumque praesentium libero reiciendis animi
                  culpa. Cupiditate similique, perferendis, doloribus commodi
                  optio fugiat suscipit tempora, quisquam officiis nihil
                  corrupti! Libero perspiciatis earum totam pariatur,
                  voluptatibus architecto odit molestiae labore qui hic cum
                  culpa odio expedita a sint consequuntur est, fuga accusamus
                  ducimus dolore laborum numquam. Sit incidunt blanditiis quod
                  ea?
               </p>
            </div>
         </div>
      </div>
   );
}

export default Resume;