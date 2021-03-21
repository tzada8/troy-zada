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
   const [midNavLocation, setMidNavLocation] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   // HAVE NAVMENU LOCATION MOVE DEPENDING ON ACTIVE COMPONENT
   function handleNavLocation(id) {
      if (document.getElementById(id).id === "HOME-MENU") {
         setMidNavLocation(true);
      } else {
         setMidNavLocation(false);
      }
   }

   return (
      <div>
         <nav className={midNavLocation ? "middle" : "left"}>
            <div className="navbar-container">
               {/* TROY ZADA HEADER/LOGO */}
               <Link
                  to="/"
                  className="navbar-logo"
                  onClick={() => {
                     closeMobileMenu();
                     handleNavLocation("HOME-MENU");
                  }}
               >
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
                        id="HOME-MENU"
                        exact
                        to="/"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        // onClick={closeMobileMenu}
                        onClick={() => {
                           closeMobileMenu();
                           handleNavLocation("HOME-MENU");
                        }}
                     >
                        {/* HOME PAGE, ABOUT ME */}
                        {HOME}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        id="PORTFOLIO-MENU"
                        exact
                        to="/portfolio"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={() => {
                           closeMobileMenu();
                           handleNavLocation("PORTFOLIO-MENU");
                        }}
                     >
                        {/* BUTTON TO DOWNLOAD RESUME, EDUCATION, AWARDS */}
                        {PORTFOLIO}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        id="SKILLS-MENU"
                        exact
                        to="/skills"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={() => {
                           closeMobileMenu();
                           handleNavLocation("SKILLS-MENU");
                        }}
                     >
                        {/* PROGRESS BARS OF VARIOUS SOFT/HARD SKILLS */}
                        {SKILLS}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        id="EXPERIENCE-MENU"
                        exact
                        to="/experience"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={() => {
                           closeMobileMenu();
                           handleNavLocation("EXPERIENCE-MENU");
                        }}
                     >
                        {/* WORK AND PROJECTS */}
                        {EXPERIENCE}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        id="BLOG-MENU"
                        exact
                        to="/blog"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={() => {
                           closeMobileMenu();
                           handleNavLocation("BLOG-MENU");
                        }}
                     >
                        {/* POSTS ABOUT VARIOUS STUFF */}
                        {/* E.G. FIRST POST ABOUT "CREATING THIS WEBSITE" */}
                        {BLOG}
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        id="CONTACT-MENU"
                        exact
                        to="/contact"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={() => {
                           closeMobileMenu();
                           handleNavLocation("CONTACT-MENU");
                        }}
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
