import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../../Constants";

function PageNotFound() {
   return (
      <div>
         <p>
            This page does not exist. Please choose one of the pages from the
            menu, or return back to the homepage here:{" "}
            <Link to="/">{HOME}</Link>.
         </p>
      </div>
   );
}

export default PageNotFound;
