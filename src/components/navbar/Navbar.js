import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import {
   HOME,
   PORTFOLIO,
   SKILLS,
   EXPERIENCE,
   BLOG,
   CONTACT,
} from "../Constants";

function Navbar() {
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   return (
      <div>
         <nav>
            <div className="navbar-container">
               {/* TROY ZADA HEADER/LOGO */}
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  TZ
               </Link>

               {/* FOR MOBILE VIEW, HAVE 3 BARS ICON WITH NAVBAR ITEMS BELOW */}
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
               </div>

               {/* LIST OF NAVBAR ITEMS */}
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                     >
                        {/* HOME PAGE, ABOUT ME */}
                        {HOME}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/portfolio"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                     >
                        {/* BUTTON TO DOWNLOAD RESUME, EDUCATION, AWARDS */}
                        {PORTFOLIO}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/skills"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                     >
                        {/* PROGRESS BARS OF VARIOUS SOFT/HARD SKILLS */}
                        {SKILLS}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/experience"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                     >
                        {/* WORK AND PROJECTS */}
                        {EXPERIENCE}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/blog"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                     >
                        {/* POSTS ABOUT VARIOUS STUFF */}
                        {/* E.G. FIRST POST ABOUT "CREATING THIS WEBSITE" */}
                        {BLOG}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/contact"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                     >
                        {CONTACT}
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;
