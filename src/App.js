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
                     <Home />
                  </Route>
                  <Route exact path="/portfolio">
                     <Home />
                     <Portfolio />
                  </Route>
                  <Route exact path="/skills">
                     <Home />
                     <Skills />
                  </Route>
                  <Route exact path="/experience">
                     <Home />
                     <Experience />
                  </Route>
                  <Route exact path="/blog">
                     <Home />
                     <Blog />
                  </Route>
                  <Route exact path="/contact">
                     <Home />
                     <Contact />
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
