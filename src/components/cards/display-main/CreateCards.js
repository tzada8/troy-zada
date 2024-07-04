import React from "react";

import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./CreateCards.css";

export default function CreateCards(props) {
	return (
		<div className={`card-box ${props.isActive && "other-page"}`}>
			<div className="card-container">
				<Header label={props.label} />
				<div className="card-content">{props.content}</div>
				<Footer quote={props.quote} author={props.author} />
			</div>
		</div>
	);
}
