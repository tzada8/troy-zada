import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// DISPLAY CORRESPONDING COMPONENTS
import Display from "./Display";

function App() {
   return (
      <div>
         <Router>
            <div id="content-container">
               <Switch>
                  {/* MAYBE FACTOR STUFF FROM INSIDE <SWITCH> OUT AND SIMPLIFY CODE??? */}

                  <Route exact path="/">
                     <Display home={true} startPos={true} />
                  </Route>

                  <Route exact path="/experience">
                     <Display experience={true} />
                  </Route>

                  <Route exact path="/skills">
                     <Display skills={true} />
                  </Route>

                  <Route exact path="/portfolio">
                     <Display portfolio={true} />
                  </Route>
                  <Route exact path="/portfolio/moodivity">
                     <Display portfolio={false} moodivity={true} />
                  </Route>
                  <Route exact path="/portfolio/sudoku-solver">
                     <Display portfolio={false} sudokuSolver={true} />
                  </Route>
                  <Route exact path="/portfolio/literature-fair">
                     <Display portfolio={false} literatureFair={true} />
                  </Route>

                  <Route exact path="/blog">
                     <Display blog={true} />
                  </Route>
                  <Route exact path="/contact">
                     <Display contact={true} />
                  </Route>

                  {/* IN CASE USER TYPES A LINK IN URL THAT DOES NOT EXIST */}
                  <Route>
                     <Display pageNotFound={true} />
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
