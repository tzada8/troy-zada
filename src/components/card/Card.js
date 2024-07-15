import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Card.css";

export default function Card(props) {
	return (
		<div data-testid="card-box" className="card-box">
			<div className="card-container">
				<Header label={props.label} backTo={props.backTo} />
				<div className="card-content">
					<div className="main-content-flex">{props.children}</div>
					<Footer quote={props.quote} author={props.author} />
				</div>
			</div>
		</div>
	);
}
