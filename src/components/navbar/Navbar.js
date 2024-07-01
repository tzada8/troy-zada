import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navbarData } from "../../data/NavbarData";

import Logo from "../logo/Logo";
import NavButton from "../button/NavButton";
import "./Navbar.css";

function Navbar(props) {
	const [click, setClick] = useState(false);
	const [midNavLocation, setMidNavLocation] = useState(props.startPos);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const navlinkIdMenu = "-MENU";
	const homeData = navbarData.home;
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
			<Logo />
		</Link>
	);

	const navbarMobileIconDisplay = (
		<div className="menu-icon" onClick={handleClick}>
			<i className={click ? "fas fa-times" : "fas fa-bars"} />
		</div>
	);

	const navbarItemsDisplay = (
		<ul className={click ? "nav-menu active" : "nav-menu"}>
			{Object.keys(navbarData).map((key) => {
				const itemLabel = navbarData[key].label;
				const itemId = itemLabel + navlinkIdMenu;
				return (
					<NavButton
						key={itemId}
						id={itemId}
						label={itemLabel}
						path={navbarData[key].path}
						onClick={() => {
							closeMobileMenu();
							handleNavLocation(itemId);
						}}
					/>
				);
			})}
		</ul>
	);

	// Move nav menu to center/left of screen depending on active component
	const handleNavLocation = (id) => {
		if (document.getElementById(id).id === homeId) {
			setMidNavLocation(true);
		} else {
			setMidNavLocation(false);
		}
	};

	return (
		<div>
			<nav className={midNavLocation ? "middle" : "left"}>
				<div className="navbar-container">
					{navbarLogoDisplay}
					{navbarMobileIconDisplay}
					{navbarItemsDisplay}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
