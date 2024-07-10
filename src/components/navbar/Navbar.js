import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

import { routes } from "../../routes/routes";

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
			<div className="navbar-container">
				<Logo className="navbar-logo-position" onClick={closeMenu} />
				<div className="menu-icon center" onClick={handleClick}>
					<Icon image={click ? <FaTimes /> : <FaBars />} color="white" clickable />
				</div>
				<div className={`nav-menu ${click ? "active" : ""}`}>
					{routes.map(r => (
						<NavButton key={r.path} label={r.label} path={r.path} onClick={closeMenu} />
					))}
				</div>
			</div>
		</nav>
	);
}
