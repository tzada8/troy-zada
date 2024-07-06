import React from "react";

import { FULL_NAME } from "./data/constants";
import { home, pageNotFound, routes } from "./routes/routes";

import Card from "./components/card/Card";
import DetailedPost from "./components/detailed-post/DetailedPost";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

export default function Display(props) {
	const isHomeActive = props.active === routes[home].path;

	return (
		<div>
			<Navbar isMid={isHomeActive} />
			<Home isOnlyComp={isHomeActive} />

			{routes.map((r, k) => r.path !== routes[home].path && (
				<Card
					key={k}
					isActive={props.active === r.path && !isHomeActive}
					label={r.label.toUpperCase()}
					quote={r.quote}
					author={r.author}
				>{r.element}</Card>
			))}

			{routes.map(r => (
				r.subroutes && r.subroutes.map((sr, k) => (
					<Card
						key={k}
						isActive={props.active === sr.path}
						label={sr.label}
						backTo={r.path}
						subcard
					>
						<DetailedPost
							label={sr.label}
							src={sr.image}
							details={`${FULL_NAME} \u00A0|\u00A0 ${sr.date}`}
							github={sr.github}
						/>
						{sr.element}
					</Card>
				))
			))}

			<Card
				isActive={props.active === pageNotFound.path}
				label={pageNotFound.label}
				quote={pageNotFound.quote}
				author={pageNotFound.author}
			>{pageNotFound.element}</Card>
		</div>
	);
}
