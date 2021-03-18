import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// NAVIGATION
import Navbar from "./components/navbar/Navbar";

// CARDS FOR CONTENT
import Home from "./components/cards/home/Home";
import Resume from "./components/cards/resume/Resume";
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
                  <Route path="/" exact component={Home} />
                  <Route path="/resume" exact component={Resume} />
                  <Route path="/skills" exact component={Skills} />
                  <Route path="/experience" exact component={Experience} />
                  <Route path="/blog" exact component={Blog} />
                  <Route path="/contact" exact component={Contact} />
                  {/* IN CASE USER TYPES A LINK IN URL THAT DOES NOT EXIST */}
                  <Route component={PageNotFound} />
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
