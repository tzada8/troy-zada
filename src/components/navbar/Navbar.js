import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { home, routes } from "../../routes/routes";

import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import NavButton from "../button/NavButton";
import "./Navbar.css";

export default function Navbar(props) {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	return (
		<nav className={props.isMid ? "middle" : "left"}>
			<Logo className="navbar-logo-position" onClick={closeMenu} />
			<div className="menu-icon center" onClick={handleClick}>
				<Icon image={click ? <FaTimes /> : <FaBars />} white clickable />
			</div>
			<div className={`nav-menu ${click && "active"}`}>
				{routes.map((r, k) => (
					<NavButton
						key={k}
						label={r.label}
						path={r.path}
						onClick={closeMenu}
						exact={r.path === routes[home].path}
					/>
				))}
			</div>
		</nav>
	);
}
