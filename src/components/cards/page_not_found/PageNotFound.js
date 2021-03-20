import React from "react";
import { Link } from "react-router-dom";
import { HOME, PAGE_NOT_FOUND } from "../../Constants";

function PageNotFound() {
   return (
      <div className="card-box other-page">
         <div className="card-container">
            {/* TITLE OF CARD */}
            <div className="card-title">
               <h1>{PAGE_NOT_FOUND}</h1>
            </div>

            {/* REST OF CONTENT */}
            <div className="card-content">
               <p>
                  This page does not exist. Please choose one of the pages from
                  the menu, or return back to the homepage here:{" "}
                  <Link to="/">{HOME}</Link>.
               </p>
            </div>
         </div>
      </div>
   );
}

export default PageNotFound;
