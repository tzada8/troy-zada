import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { pageNotFound, routes } from "./routes/routes";

import Display from "./Display";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/text.css";

export default function App() {
	return (
		<BrowserRouter>
			{/* TODO: Look into using <Fade> component. */}
			<Routes>
				{/* TODO: See if possible to only do something like
					<Display info={routes[0]} active={routes[0].path} />
				and still be able to have transitions/animations.
				Currently, doesn't seem possible since doing above would
				only render 1 component, putting it in the place it already
				should be (instead of transitioning it there). Maybe there's
				a way to render component in an initial spot to allow the
				transition to happen.
				*/}
				{/* TODO: If possible, would be able to get rid of double
				routes looping in App.js and Display.js. */}

				{routes.map((r, i) => (
					<Route exact key={i} path={r.path} element={<Display active={r.path} />} />
				))}

				{routes.map(r => r.subroutes && r.subroutes.map((sr, k) => (
					<Route exact key={k} path={sr.path} element={<Display active={sr.path} />} />
				)))}

				<Route path={pageNotFound.path} element={<Display active={pageNotFound.path} />} />
			</Routes>
		</BrowserRouter>
	);
}
