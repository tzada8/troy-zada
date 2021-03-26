import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// NAVIGATION
import Navbar from "./components/navbar/Navbar";

// RENDER CARDS
import RenderCards from "./components/cards/RenderCards";
import RenderSubcards from "./components/cards/content/portfolio/subcards/RenderSubcards";

function App() {
   return (
      <div>
         <Router>
            <div id="content-container">
               <Switch>
                  {/* MAYBE FACTOR STUFF FROM INSIDE <SWITCH> OUT AND SIMPLIFY CODE??? */}

                  <Route exact path="/">
                     <RenderCards home={true} />
                     <Navbar startPos={true} />
                  </Route>
                  <Route exact path="/experience">
                     <RenderCards experience={true} />
                     <Navbar />
                  </Route>
                  <Route exact path="/skills">
                     <RenderCards skills={true} />
                     <Navbar />
                  </Route>
                  <Route exact path="/portfolio">
                     <RenderCards portfolio={true} />
                     <Navbar />
                     <RenderSubcards />
                  </Route>
                  <Route exact path="/portfolio/moodivity">
                     <RenderCards portfolio={true} />
                     <Navbar />
                     <RenderSubcards moodivity={true} />
                  </Route>
                  <Route exact path="/portfolio/sudoku-solver">
                     <RenderCards portfolio={true} />
                     <Navbar />
                     <RenderSubcards sudokuSolver={true} />
                  </Route>
                  <Route exact path="/blog">
                     <RenderCards blog={true} />
                     <Navbar />
                  </Route>
                  <Route exact path="/contact">
                     <RenderCards contact={true} />
                     <Navbar />
                  </Route>
                  {/* IN CASE USER TYPES A LINK IN URL THAT DOES NOT EXIST */}
                  <Route>
                     <RenderCards pageNotFound={true} />
                     <Navbar />
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
