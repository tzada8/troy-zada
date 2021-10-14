// Coding Project Images
import troyZadaImage from "../images/portfolio/coding/troy-zada.png";
import blackJackImage from "../images/portfolio/coding/blackjack.png";
import moodivityImage from "../images/portfolio/coding/moodivity.png";
import sudokuSolverImage from "../images/portfolio/coding/sudoku-solver.png";
import decisionSupportSystemImage from "../images/portfolio/coding/decision-support-system.png";
import pathfindingAlgorithmsImage from "../images/portfolio/coding/pathfinding-algorithms.png";
// Communication Project Images
import literatureFairImage from "../images/portfolio/communication/literature-fair.png";
import industry4Image from "../images/portfolio/communication/industry4.png";

import { routes } from "./Routes";

// General GitHub links
const github = "https://github.com/";
const githubTroyProfile = github + "tzada8/";
const githubSamProfile = github + "s6eskand/";

// General YouTube link
const youtube = "https://www.youtube.com/";

export const portfolioData = {
	coding: {
		moodivity: {
			title: "Moodivity",
			path: routes.portfolio.moodivity.path,
			image: moodivityImage,
			briefDescription:
				"Moodivity is a web application that improves productivity for users while guiding them to be more in tune with their mental health",
			date: "November 22, 2020",
			github: githubSamProfile + "Moodivity",
			youtube: youtube + "watch?v=g_i8N4H7MDQ",
		},
		troyZadaWebsite: {
			title: "Troy Zada Website",
			path: routes.portfolio.troyZada.path,
			image: troyZadaImage,
			briefDescription:
				"A website explaining who I am including experiences, qualities I possess, contact information, and more",
			date: "TODAY",
			github: githubTroyProfile + "TroyZada",
			youtube: youtube,
		},
		pathfinding: {
			title: "Pathfinding Algorithms",
			path: routes.portfolio.pathfinding.path,
			image: pathfindingAlgorithmsImage,
			briefDescription:
				"Compares various pathfinding algorithms including Breadth-First Search, Depth-First Search, A*, and Dijkstra",
			date: "April 27, 2021",
			github: githubTroyProfile + "PathfindingAlgorithms",
			youtube: youtube,
		},
		sudokuSolver: {
			title: "Sudoku Solver",
			path: routes.portfolio.sudokuSolver.path,
			image: sudokuSolverImage,
			briefDescription:
				"Uses the backtracking algorithm to solve any valid sudoku board",
			date: "January 31, 2021",
			github: githubTroyProfile + "SudokuSolver",
			youtube: youtube,
		},
		blackJack: {
			title: "BlackJack",
			path: routes.portfolio.blackJack.path,
			image: blackJackImage,
			briefDescription:
				"Play through a game of BlackJack against the dealer, starting with a given $1000",
			date: "January 24, 2021",
			github: githubTroyProfile + "BlackJack",
			youtube: youtube,
		},
		dss: {
			title: "Decision Support System",
			path: routes.portfolio.dss.path,
			image: decisionSupportSystemImage,
			briefDescription:
				"Simplifies university group projects by aiding in decision making while also maintaining a high degree of organization for the group",
			date: "December 16, 2019",
			github: githubTroyProfile + "DecisionSupportSystem",
			youtube: youtube,
		},
	},
	communication: {
		literatureFair: {
			title: "Literature Fair",
			path: routes.portfolio.literatureFair.path,
			image: literatureFairImage,
			briefDescription:
				"Focuses on the literary theory of existentialism, being that each individual is viewed as a free and responsible agent capable of decision-making to determine their lives",
			date: "June 6, 2019",
		},
		industry4: {
			title: "Industry 4.0",
			path: routes.portfolio.industry4.path,
			image: industry4Image,
			briefDescription:
				"A high school level analytic-based competition revolving around the fourth industrial revolution and automatization of production",
			date: "February 7, 2020",
		},
	},
};
