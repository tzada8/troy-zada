import React from "react";

import { FULL_NAME } from "./data/constants";
import { blog, home, pageNotFound, portfolio, routes } from "./routes/routes";

import Card from "./components/card/Card";
import DetailedPost from "./components/detailed-post/DetailedPost";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

export default function Display(props) {
	const backToPortfolio = routes[portfolio].path;
	const backToBlog = routes[blog].path;

	const isHomeActive = props.active === routes[home].path;

	return (
		<div>
			<Navbar isMid={isHomeActive} />
			<Home isOnlyComp={isHomeActive} />

			{/* TODO: Technically <CreateCards /> should also display Home. */}
			{routes.map((r, k) => (
				<Card
					key={k}
					isActive={props.active === r.path && !isHomeActive}
					label={r.label.toUpperCase()}
					quote={r.quote}
					author={r.author}
				>{r.element}</Card>
			))}

			{routes[portfolio].subroutes.map((r, k) => (
				<Card
					key={k}
					isActive={props.active === r.path}
					label={r.label}
					backTo={backToPortfolio}
					subcard
				>
					<DetailedPost
						label={r.label}
						src={r.image}
						details={`${FULL_NAME} \u00A0|\u00A0 ${r.date}`}
						github={r.github}
					/>
					{r.element}
				</Card>
			))}

			{routes[blog].subroutes.map((r, k) => (
				<Card
					key={k}
					isActive={props.active === r.path}
					label={r.label}
					backTo={backToBlog}
					subcard
				>
					<DetailedPost
						label={r.label}
						src={r.image}
						details={`${FULL_NAME} \u00A0|\u00A0 ${r.date}`}
					/>
					{r.element}
				</Card>
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
