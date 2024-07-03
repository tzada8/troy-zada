import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { blog, portfolio, routes } from "./routes/routes";

import Display from "./Display";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/text.css";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					{/* MAYBE FACTOR STUFF FROM INSIDE <SWITCH> OUT AND SIMPLIFY CODE??? */}

					<Route exact path={routes[0].path}>
						<Display home={true} startPos={true} />
					</Route>

					<Route exact path={routes[1].path}>
						<Display experience={true} />
					</Route>

					<Route exact path={routes[2].path}>
						<Display skills={true} />
					</Route>

					<Route exact path={routes[3].path}>
						<Display portfolio={true} />
					</Route>
					<Route exact path={routes[portfolio].subroutes[1].path}>
						<Display portfolio={false} troyZada={true} />
					</Route>
					<Route exact path={routes[portfolio].subroutes[0].path}>
						<Display portfolio={false} moodivity={true} />
					</Route>
					<Route exact path={routes[portfolio].subroutes[3].path}>
						<Display portfolio={false} sudokuSolver={true} />
					</Route>
					<Route exact path={routes[portfolio].subroutes[4].path}>
						<Display portfolio={false} blackJack={true} />
					</Route>
					<Route exact path={routes[portfolio].subroutes[2].path}>
						<Display portfolio={false} pathfinding={true} />
					</Route>
					<Route exact path={routes[portfolio].subroutes[5].path}>
						<Display portfolio={false} dss={true} />
					</Route>

					<Route exact path={routes[4].path}>
						<Display blog={true} />
					</Route>
					<Route exact path={routes[blog].subroutes[1].path}>
						<Display blog={false} creatingThisWebsite={true} />
					</Route>
					<Route exact path={routes[blog].subroutes[0].path}>
						<Display blog={false} firstWorkTerm={true} />
					</Route>

					<Route exact path={routes[5].path}>
						<Display contact={true} />
					</Route>

					{/* IN CASE USER TYPES A LINK IN URL THAT DOES NOT EXIST */}
					<Route>
						<Display pageNotFound={true} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
