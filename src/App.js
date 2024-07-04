import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { blog, pageNotFound, portfolio, routes } from "./routes/routes";

import Display from "./Display";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/text.css";

function App() {
	return (
		<div>
			{/* TODO: Look into using <Fade> component. */}
			<BrowserRouter>
				<Switch>
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


					{/* TODO: Use this instead. */}
					{/* {routes.map((r, i) => (
						<Route exact key={i} path={r.path}>
							<Display active={r.path} />
						</Route>
					))} */}

					<Route exact path={routes[0].path}>
						<Display active={routes[0].path} />
					</Route>

					<Route exact path={routes[1].path}>
						<Display active={routes[1].path} />
					</Route>

					<Route exact path={routes[2].path}>
						<Display active={routes[2].path} />
					</Route>

					<Route exact path={routes[3].path}>
						<Display active={routes[3].path} />
					</Route>

					<Route exact path={routes[4].path}>
						<Display active={routes[4].path} />
					</Route>

					<Route exact path={routes[5].path}>
						<Display active={routes[5].path} />
					</Route>

					{/* TODO: Use this instead. */}
					{/* {routes[portfolio].subroutes.map((r, i) => (
						<Route exact key={i} path={r.path}>
							<Display active={r.path} />
						</Route>
					))} */}

					<Route exact path={routes[portfolio].subroutes[0].path}>
						<Display active={routes[portfolio].subroutes[0].path} />
					</Route>

					<Route exact path={routes[portfolio].subroutes[1].path}>
						<Display active={routes[portfolio].subroutes[1].path} />
					</Route>

					<Route exact path={routes[portfolio].subroutes[2].path}>
						<Display active={routes[portfolio].subroutes[2].path} />
					</Route>

					<Route exact path={routes[portfolio].subroutes[3].path}>
						<Display active={routes[portfolio].subroutes[3].path} />
					</Route>

					<Route exact path={routes[portfolio].subroutes[4].path}>
						<Display active={routes[portfolio].subroutes[4].path} />
					</Route>

					<Route exact path={routes[portfolio].subroutes[5].path}>
						<Display active={routes[portfolio].subroutes[5].path} />
					</Route>

					{/* TODO: Use this instead. */}
					{/* {routes[blog].subroutes.map((r, i) => (
						<Route exact key={i} path={r.path}>
							<Display active={r.path} />
						</Route>
					))} */}

					<Route exact path={routes[blog].subroutes[0].path}>
						<Display active={routes[blog].subroutes[0].path} />
					</Route>

					<Route exact path={routes[blog].subroutes[1].path}>
						<Display active={routes[blog].subroutes[1].path} />
					</Route>

					<Route>
						<Display active={pageNotFound.path} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
