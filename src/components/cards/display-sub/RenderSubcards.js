import React from "react";

// MENU CONSTANTS FOR SUBCARD TITLES

import { navbarData } from "../../../data/NavbarData";

// SUBCARDS
import CreateSubcards from "./CreateSubcards";

import { portfolioData } from "../../../data/portfolio/PortfolioData";
import { blogData } from "../../../data/blog/BlogData";

// DETERMINES WHICH SUBCARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderSubcards(props) {
	const backToPortfolio = navbarData.portfolio.path;
	const backToBlog = navbarData.blog.path;

	return (
		<div>
			<div className="portfolio-subcards">
				{/* CODING PROJECTS */}
				<CreateSubcards
					isActive={props.troyZada}
					backTo={backToPortfolio}
					content={portfolioData.coding.troyZadaWebsite.component}
				/>
				<CreateSubcards
					isActive={props.moodivity}
					backTo={backToPortfolio}
					content={portfolioData.coding.moodivity.component}
				/>
				<CreateSubcards
					isActive={props.sudokuSolver}
					backTo={backToPortfolio}
					content={portfolioData.coding.sudokuSolver.component}
				/>
				<CreateSubcards
					isActive={props.blackJack}
					backTo={backToPortfolio}
					content={portfolioData.coding.blackJack.component}
				/>
				<CreateSubcards
					isActive={props.pathfinding}
					backTo={backToPortfolio}
					content={portfolioData.coding.pathfinding.component}
				/>
				<CreateSubcards
					isActive={props.dss}
					backTo={backToPortfolio}
					content={portfolioData.coding.dss.component}
				/>

				{/* COMMUNICATION PROJECTS */}
				<CreateSubcards
					isActive={props.literatureFair}
					backTo={backToPortfolio}
					content={portfolioData.communication.literatureFair.component}
				/>
				<CreateSubcards
					isActive={props.industry4}
					backTo={backToPortfolio}
					content={portfolioData.communication.industry4.component}
				/>
			</div>

			<div className="blog-subcards">
				<CreateSubcards
					isActive={props.creatingThisWebsite}
					backTo={backToBlog}
					content={blogData.creatingThisWebsite.component}
				/>
				<CreateSubcards
					isActive={props.firstWorkTerm}
					backTo={backToBlog}
					content={blogData.firstWorkTerm.component}
				/>
			</div>
		</div>
	);
}

export default RenderSubcards;
