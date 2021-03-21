import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// NAVIGATION
import Navbar from "./components/navbar/Navbar";

// CARDS FOR CONTENT
import Home from "./components/cards/home/Home";
import Portfolio from "./components/cards/portfolio/Portfolio";
import Skills from "./components/cards/skills/Skills";
import Experience from "./components/cards/experience/Experience";
import Blog from "./components/cards/blog/Blog";
import Contact from "./components/cards/contact/Contact";
import PageNotFound from "./components/cards/page_not_found/PageNotFound";

function App() {
   return (
      <div>
         <Router>
            <Navbar />
            <div className="content-container">
               <Switch>
                  <Route exact path="/">
                     <Home isOnlyComp={true} />
                     <Portfolio isActive={false} />
                     <Skills isActive={false} />
                     <Experience isActive={false} />
                     <Blog isActive={false} />
                     <Contact isActive={false} />
                  </Route>
                  <Route exact path="/portfolio">
                     <Home isOnlyComp={false} />
                     <Portfolio isActive={true} />
                     <Skills isActive={false} />
                     <Experience isActive={false} />
                     <Blog isActive={false} />
                     <Contact isActive={false} />
                  </Route>
                  <Route exact path="/skills">
                     <Home isOnlyComp={false} />
                     <Portfolio isActive={false} />
                     <Skills isActive={true} />
                     <Experience isActive={false} />
                     <Blog isActive={false} />
                     <Contact isActive={false} />
                  </Route>
                  <Route exact path="/experience">
                     <Home isOnlyComp={false} />
                     <Portfolio isActive={false} />
                     <Skills isActive={false} />
                     <Experience isActive={true} />
                     <Blog isActive={false} />
                     <Contact isActive={false} />
                  </Route>
                  <Route exact path="/blog">
                     <Home isOnlyComp={false} />
                     <Portfolio isActive={false} />
                     <Skills isActive={false} />
                     <Experience isActive={false} />
                     <Blog isActive={true} />
                     <Contact isActive={false} />
                  </Route>
                  <Route exact path="/contact">
                     <Home isOnlyComp={false} />
                     <Portfolio isActive={false} />
                     <Skills isActive={false} />
                     <Experience isActive={false} />
                     <Blog isActive={false} />
                     <Contact isActive={true} />
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
