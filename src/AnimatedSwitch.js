import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { home, pageNotFound, routes } from "./routes/routes";

import Card from "./components/card/Card";
import Subcard from "./components/card/Subcard";
import "./styles/animated-switch.css";

// Functionality based on: https://reactcommunity.org/react-transition-group/with-react-router/
export default function AnimatedSwitch(props) {
	const getAnimationStyle = (p) => {
		const isSubroute = routes.some(
			(r) => r.subroutes && r.subroutes.some((sr) => sr.path === p)
		);
		return isSubroute ? "slide-vertical" : "slide-horizontal";
	};

	return (
		<SwitchTransition>
			<CSSTransition
				key={props.location.pathname}
				timeout={350}
				classNames={getAnimationStyle(props.location.pathname)}
				unmountOnExit
			>
				<Routes location={props.location}>
					<Route path={home.path} element={<Outlet />} />

					{routes.map((r) => (
						<Route
							key={r.path}
							path={r.path}
							element={
								<Card label={r.label} quote={r.quote} author={r.author}>
									{r.element}
								</Card>
							}
						/>
					))}

					{routes.map(
						(r) =>
							r.subroutes &&
							r.subroutes.map((sr) => (
								<Route
									key={sr.path}
									path={sr.path}
									element={
										<Subcard
											label={sr.label}
											backTo={r.path}
											image={sr.image}
											date={sr.date}
											github={sr.github}
										>
											{sr.element}
										</Subcard>
									}
								/>
							))
					)}

					<Route
						path={pageNotFound.path}
						element={
							<Card
								label={pageNotFound.label}
								quote={pageNotFound.quote}
								author={pageNotFound.author}
							>
								{pageNotFound.element}
							</Card>
						}
					/>
				</Routes>
			</CSSTransition>
		</SwitchTransition>
	);
}
