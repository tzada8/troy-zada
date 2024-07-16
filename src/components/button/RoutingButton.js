import React from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

import Icon from "../icon/Icon";
import "./Button.css";

export default function RoutingButton(props) {
	const externalLinks = ["https://", "mailto:"];
	const isExternal = externalLinks.some((i) => props.path.includes(i));
	const isIcon = props.label ? false : true;
	const ariaText = props.label || props.aria;

	const handleButtonClick = () => {
		ReactGA.event({ category: "Button", action: `${ariaText} click` });
	};

	const iconButton = (
		<Icon image={props.icon} color={props.color} large={props.color} clickable />
	);
	const textButton = (
		<div className="button-font">
			{props.label && props.label.toUpperCase()}
			<Icon image={props.icon} className="button-icon" small color="white" />
		</div>
	);

	const linkClass = "button-link background-change";
	const buttonContent = isIcon ? iconButton : textButton;
	const buttonClass = !isIcon ? linkClass : "";

	return isExternal ? (
		<a
			data-testid="external-link"
			href={props.path}
			target="_blank"
			rel="noreferrer"
			className={buttonClass}
			aria-label={ariaText}
			onClick={handleButtonClick}
		>
			{buttonContent}
		</a>
	) : (
		<Link
			data-testid="internal-link"
			to={props.path}
			className={buttonClass}
			onClick={handleButtonClick}
		>
			{buttonContent}
		</Link>
	);
}
