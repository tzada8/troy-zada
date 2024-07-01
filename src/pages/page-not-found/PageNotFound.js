import React from "react";

import "./PageNotFound.css";

export default function PageNotFound() {
   return (
      <div>
         <h3>Oh no, this page doesn't exist!</h3>
         <br />
         <p style={{ textAlign: "center", marginBottom: -10 + "px" }}>
            Please choose one of the pages from the menu on the left.
         </p>
      </div>
   );
}
