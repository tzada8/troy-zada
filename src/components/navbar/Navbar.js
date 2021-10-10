import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarCategories } from "../Constants";
import "./Navbar.css";

function Navbar(props) {
	const [click, setClick] = useState(false);
	const [midNavLocation, setMidNavLocation] = useState(props.startPos);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const navlinkIdMenu = "-MENU";
	const homeData = navbarCategories.home;
	const homeId = homeData.label + navlinkIdMenu;

	const navbarLogoDisplay = (
		<Link
			exact
			to={homeData.path}
			className="navbar-logo"
			onClick={() => {
				closeMobileMenu();
				handleNavLocation(homeId);
			}}
		>
			TZ
		</Link>
	);

	const navbarMobileIconDisplay = (
		<div className="menu-icon" onClick={handleClick}>
			<i className={click ? "fas fa-times" : "fas fa-bars"} />
		</div>
	);

	const navbarDisplay = (
		<ul className={click ? "nav-menu active" : "nav-menu"}>
			{Object.keys(navbarCategories).map((key) => {
				const itemLabel = navbarCategories[key].label;
				const itemPath = navbarCategories[key].path;
				const itemId = itemLabel + navlinkIdMenu;
				return (
					<NavLink
						key={itemLabel}
						id={itemId}
						exact
						to={itemPath}
						className="nav-links"
						activeClassName="nav-links-active"
						onClick={() => {
							closeMobileMenu();
							handleNavLocation(itemId);
						}}
					>
						{itemLabel}
					</NavLink>
				);
			})}
		</ul>
	);

	// HAVE NAVMENU LOCATION MOVE DEPENDING ON ACTIVE COMPONENT
	function handleNavLocation(id) {
		if (document.getElementById(id).id === homeId) {
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
					{navbarLogoDisplay}
					{/* FOR MOBILE VIEW, HAVE 3 BARS ICON WITH NAVBAR ITEMS BELOW */}
					{navbarMobileIconDisplay}
					{/* LIST OF NAVBAR ITEMS */}
					{navbarDisplay}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
