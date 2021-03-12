import React from "react";
import "./Home.css";
import "../Cards.css";

function Home() {
   return (
      <div className="card-box">
         <div className="card-container">
            {/* TITLE OF CARD */}
            <div className="card-title">
               <h1>HOME</h1>
            </div>

            {/* REST OF CONTENT */}
            <div className="card-content">
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat nobis quasi eius tempora possimus optio unde
                  reprehenderit quis ab sunt!
               </p>
            </div>
         </div>
      </div>
   );
}

export default Home;
