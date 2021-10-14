import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// --------------------------------------------------------------------------------------------
// PERHAPS WILL COMBINE blogData, portfolioData, experienceData, etc. all into navbarCategories
// --------------------------------------------------------------------------------------------
import { navbarCategories } from "./data/Constants";
import { blogData } from "./data/BlogData";
import { portfolioData } from "./data/PortfolioData";
import "./App.css";

// DISPLAY CORRESPONDING COMPONENTS
import Display from "./Display";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					{/* MAYBE FACTOR STUFF FROM INSIDE <SWITCH> OUT AND SIMPLIFY CODE??? */}

					<Route exact path={navbarCategories.home.path}>
						<Display home={true} startPos={true} />
					</Route>

					<Route exact path={navbarCategories.experience.path}>
						<Display experience={true} />
					</Route>

					<Route exact path={navbarCategories.skills.path}>
						<Display skills={true} />
					</Route>

					<Route exact path={navbarCategories.portfolio.path}>
						<Display portfolio={true} />
					</Route>
					<Route exact path={portfolioData.coding.troyZadaWebsite.path}>
						<Display portfolio={false} troyZada={true} />
					</Route>
					<Route exact path={portfolioData.coding.moodivity.path}>
						<Display portfolio={false} moodivity={true} />
					</Route>
					<Route exact path={portfolioData.coding.sudokuSolver.path}>
						<Display portfolio={false} sudokuSolver={true} />
					</Route>
					<Route exact path={portfolioData.coding.blackJack.path}>
						<Display portfolio={false} blackJack={true} />
					</Route>
					<Route exact path={portfolioData.coding.pathfinding.path}>
						<Display portfolio={false} pathfinding={true} />
					</Route>
					<Route exact path={portfolioData.coding.dss.path}>
						<Display portfolio={false} dss={true} />
					</Route>
					<Route
						exact
						path={portfolioData.communication.literatureFair.path}
					>
						<Display portfolio={false} literatureFair={true} />
					</Route>
					<Route exact path={portfolioData.communication.industry4.path}>
						<Display portfolio={false} industry4={true} />
					</Route>

					<Route exact path={navbarCategories.blog.path}>
						<Display blog={true} />
					</Route>
					<Route exact path={blogData.creatingThisWebsite.path}>
						<Display blog={false} creatingThisWebsite={true} />
					</Route>
					<Route exact path={blogData.firstWorkTerm.path}>
						<Display blog={false} firstWorkTerm={true} />
					</Route>

					<Route exact path={navbarCategories.contact.path}>
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
