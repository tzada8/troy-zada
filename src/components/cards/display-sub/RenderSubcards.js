import React from "react";

import { blog, portfolio, routes } from "../../../routes/routes";

import CreateSubcards from "./CreateSubcards";

// DETERMINES WHICH SUBCARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderSubcards(props) {
	const backToPortfolio = routes[portfolio].path;
	const backToBlog = routes[blog].path;

	return (
		<div>
			{/* TODO: Render these by using a loop. */}
			<div className="portfolio-subcards">
				<CreateSubcards
					isActive={props.troyZada}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes[1]}
				/>
				<CreateSubcards
					isActive={props.moodivity}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes[0]}
				/>
				<CreateSubcards
					isActive={props.sudokuSolver}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes[3]}
				/>
				<CreateSubcards
					isActive={props.blackJack}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes[4]}
				/>
				<CreateSubcards
					isActive={props.pathfinding}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes[2]}
				/>
				<CreateSubcards
					isActive={props.dss}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes[5]}
				/>
			</div>

			<div className="blog-subcards">
				<CreateSubcards
					isActive={props.creatingThisWebsite}
					backTo={backToBlog}
					content={routes[blog].subroutes[1]}
				/>
				<CreateSubcards
					isActive={props.firstWorkTerm}
					backTo={backToBlog}
					content={routes[blog].subroutes[0]}
				/>
			</div>
		</div>
	);
}

export default RenderSubcards;
