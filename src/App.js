import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// NAVIGATION
import Navbar from "./components/navbar/Navbar";

// RENDER CARDS
import RenderCards from "./components/cards/RenderCards";
import PageNotFound from "./components/cards/page_not_found/PageNotFound";

function App() {
   return (
      <div>
         <Router>
            <Navbar />
            <div id="content-container">
               <Switch>
                  <Route exact path="/">
                     <RenderCards
                        home={true}
                        portfolio={false}
                        skills={false}
                        experience={false}
                        blog={false}
                        contact={false}
                     />
                  </Route>
                  <Route exact path="/portfolio">
                     <RenderCards
                        home={false}
                        portfolio={true}
                        skills={false}
                        experience={false}
                        blog={false}
                        contact={false}
                     />
                  </Route>
                  <Route exact path="/skills">
                     <RenderCards
                        home={false}
                        portfolio={false}
                        skills={true}
                        experience={false}
                        blog={false}
                        contact={false}
                     />
                  </Route>
                  <Route exact path="/experience">
                     <RenderCards
                        home={false}
                        portfolio={false}
                        skills={false}
                        experience={true}
                        blog={false}
                        contact={false}
                     />
                  </Route>
                  <Route exact path="/blog">
                     <RenderCards
                        home={false}
                        portfolio={false}
                        skills={false}
                        experience={false}
                        blog={true}
                        contact={false}
                     />
                  </Route>
                  <Route exact path="/contact">
                     <RenderCards
                        home={false}
                        portfolio={false}
                        skills={false}
                        experience={false}
                        blog={false}
                        contact={true}
                     />
                  </Route>
                  {/* IN CASE USER TYPES A LINK IN URL THAT DOES NOT EXIST */}
                  <Route component={PageNotFound} />
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
