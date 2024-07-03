import React from "react";

import { routes, home } from "../../../routes/routes";

import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./CreateCards.css";

// CREATES CARD FRAME WITH APPROPRIATE CONTENT
function CreateCards(props) {
	const isActive = () => {
		const currentPath = window.location.pathname;

		return currentPath === props.path && currentPath !== routes[home].path
			? true
			: false;
	};

	return (
		<div className={isActive() ? "card-box other-page" : "card-box"}>
			<div className="card-container">
				<Header label={props.label} />
				<div className="card-content">{props.content}</div>
				<Footer quote={props.quote} author={props.author} />
			</div>
		</div>
	);
}

export default CreateCards;
