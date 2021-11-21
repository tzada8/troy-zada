import React from "react";
import { routes } from "../../../data/Routes";
import "./CreateCards.css";

// CREATES CARD FRAME WITH APPROPRIATE CONTENT
function CreateCards(props) {
	const isActive = () => {
		const currentPath = window.location.pathname;

		return currentPath === props.path && currentPath !== routes.home.path
			? true
			: false;
	};

	return (
		<div className={isActive() ? "card-box other-page" : "card-box"}>
			<div className="card-container">
				{/* TITLE OF CARD */}
				<div className="card-title">
					<h1>{props.label}</h1>
					<hr className="horizontal-bar__title" />
				</div>

				{/* REST OF CONTENT */}
				<div className="card-content">{props.content}</div>

				{/* FOOTER FOR QUOTATION */}
				<hr className="horizontal-bar__footer" />
				<p className="footer-quote">
					"{props.quotation}" -{" "}
					<span className="author">{props.author}</span>
				</p>
			</div>
		</div>
	);
}

export default CreateCards;
