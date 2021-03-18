import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
   return (
      <div>
         Page Not Found. Please return back to homepage -{" "}
         <Link to="/">here</Link>
      </div>
   );
}

export default PageNotFound;
