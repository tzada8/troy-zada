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
				{/* CODING PROJECTS */}
				<CreateSubcards
					isActive={props.troyZada}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.coding[1].element}
				/>
				<CreateSubcards
					isActive={props.moodivity}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.coding[0].element}
				/>
				<CreateSubcards
					isActive={props.sudokuSolver}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.coding[3].element}
				/>
				<CreateSubcards
					isActive={props.blackJack}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.coding[4].element}
				/>
				<CreateSubcards
					isActive={props.pathfinding}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.coding[2].element}
				/>
				<CreateSubcards
					isActive={props.dss}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.coding[5].element}
				/>

				{/* COMMUNICATION PROJECTS */}
				<CreateSubcards
					isActive={props.literatureFair}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.communication[0].element}
				/>
				<CreateSubcards
					isActive={props.industry4}
					backTo={backToPortfolio}
					content={routes[portfolio].subroutes.communication[1].element}
				/>
			</div>

			<div className="blog-subcards">
				<CreateSubcards
					isActive={props.creatingThisWebsite}
					backTo={backToBlog}
					content={routes[blog].subroutes[1].element}
				/>
				<CreateSubcards
					isActive={props.firstWorkTerm}
					backTo={backToBlog}
					content={routes[blog].subroutes[0].element}
				/>
			</div>
		</div>
	);
}

export default RenderSubcards;
