import React from "react";

import { blog, home, pageNotFound, portfolio, routes } from "./routes/routes";

import CreateCards from "./components/cards/display-main/CreateCards";
import CreateSubcards from "./components/cards/display-sub/CreateSubcards";
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
				<CreateCards
					key={k}
					isActive={props.active === r.path && !isHomeActive}
					label={r.label}
					path={r.path}
					content={r.element}
					quote={r.quote}
					author={r.author}
				/>
			))}

			{routes[portfolio].subroutes.map((r, k) => (
				<CreateSubcards
					key={k}
					isActive={props.active === r.path}
					backTo={backToPortfolio}
					content={r}
				/>
			))}

			{routes[blog].subroutes.map((r, k) => (
				<CreateSubcards
					key={k}
					isActive={props.active === r.path}
					backTo={backToBlog}
					content={r}
				/>
			))}

			<CreateCards
				label={pageNotFound.label}
				isActive={props.active === pageNotFound.path}
				content={pageNotFound.element}
				quote={pageNotFound.quote}
				author={pageNotFound.author}
			/>
		</div>
	);
}
