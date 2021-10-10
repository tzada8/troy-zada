import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAVBAR_CATEGORIES } from "../Constants";
import "./Navbar.css";

function Navbar(props) {
	const [click, setClick] = useState(false);
	const [midNavLocation, setMidNavLocation] = useState(props.startPos);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const navlinkIdMenu = "-MENU";
	const homeId = NAVBAR_CATEGORIES[0].label + navlinkIdMenu;

	const navbarLogoDisplay = (
		<Link
			exact
			to={NAVBAR_CATEGORIES[0].path}
			className="navbar-logo"
			onClick={() => {
				closeMobileMenu();
				handleNavLocation(homeId);
			}}
		>
			TZ
		</Link>
	);

	const navbarMobileIcon = (
		<div className="menu-icon" onClick={handleClick}>
			<i className={click ? "fas fa-times" : "fas fa-bars"} />
		</div>
	);

	const navbarDisplay = (
		<ul className={click ? "nav-menu active" : "nav-menu"}>
			{NAVBAR_CATEGORIES.map((item) => {
				const itemId = item.label + navlinkIdMenu;
				return (
					<NavLink
						key={item.label}
						id={itemId}
						exact
						to={item.path}
						className="nav-links"
						activeClassName="nav-links-active"
						onClick={() => {
							closeMobileMenu();
							handleNavLocation(itemId);
						}}
					>
						{item.label}
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
					{navbarMobileIcon}
					{/* LIST OF NAVBAR ITEMS */}
					{navbarDisplay}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
