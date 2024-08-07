import React, { useState } from "react";
import ReactGA from "react-ga4";
import { FaBars, FaXmark } from "react-icons/fa6";

import { routes } from "../../routes/routes";

import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import NavButton from "../button/NavButton";
import "./Navbar.css";

export default function Navbar(props) {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	const handleLogoClick = () => {
		closeMenu();
		ReactGA.event({ category: "Button", action: "Logo click" });
	};

	const handleMenuClick = () => {
		handleClick();
		ReactGA.event({ category: "Button", action: "Menu click" });
	};

	return (
		<nav className={props.isMid ? "middle" : "left"}>
			<div className="navbar-container">
				<Logo className="navbar-logo-position" onClick={handleLogoClick} />
				<div className="menu-icon center" onClick={handleMenuClick}>
					<Icon image={click ? <FaXmark /> : <FaBars />} color="white" clickable />
				</div>
				<div data-testid="nav-menu" className={`nav-menu ${click ? "active" : ""}`}>
					{routes.map((r) => (
						<NavButton key={r.path} label={r.label} path={r.path} onClick={closeMenu} />
					))}
				</div>
			</div>
		</nav>
	);
}
