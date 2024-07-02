// Images
import moodivityImage from "../../images/portfolio/coding/moodivity.png";
import troyZadaImage from "../../images/portfolio/coding/troy-zada.png";
import pathfindingAlgorithmsImage from "../../images/portfolio/coding/pathfinding-algorithms.png";
import sudokuSolverImage from "../../images/portfolio/coding/sudoku-solver.png";
import blackJackImage from "../../images/portfolio/coding/blackjack.png";
import decisionSupportSystemImage from "../../images/portfolio/coding/decision-support-system.png";
import literatureFairImage from "../../images/portfolio/communication/literature-fair.png";
import industry4Image from "../../images/portfolio/communication/industry4.png";

// Components
import Moodivity from "../../pages/portfolio/projects/Moodivity";
import TroyZada from "../../pages/portfolio/projects/TroyZada";
import Pathfinding from "../../pages/portfolio/projects/Pathfinding";
import SudokuSolver from "../../pages/portfolio/projects/SudokuSolver";
import BlackJack from "../../pages/portfolio/projects/BlackJack";
import DSS from "../../pages/portfolio/projects/DSS";
import LiteratureFair from "../../pages/portfolio/projects/LiteratureFair";
import Industry4 from "../../pages/portfolio/projects/Industry4";

import { routes } from "../Routes";

// General GitHub links
const github = "https://github.com/";
const githubTroyProfile = github + "tzada8/";
const githubSamProfile = github + "s6eskand/";

// General YouTube link
const youtube = "https://www.youtube.com/";

export const portfolioData = {
	coding: {
		moodivity: {
			label: "Moodivity",
			path: routes.portfolio.moodivity.path,
			component: <Moodivity />,
			image: moodivityImage,
			briefDescription: "Boost productivity while balancing mental health",
			date: "November 22, 2020",
			github: githubSamProfile + "Moodivity",
			youtube: youtube + "watch?v=g_i8N4H7MDQ",
		},
		troyZadaWebsite: {
			label: "Troy Zada Website",
			path: routes.portfolio.troyZada.path,
			component: <TroyZada />,
			image: troyZadaImage,
			briefDescription: "Discover my experiences, qualities, and overall portfolio",
			date: "TODAY",
			github: githubTroyProfile + "TroyZada",
			youtube: youtube,
		},
		pathfinding: {
			label: "Pathfinding Algorithms",
			path: routes.portfolio.pathfinding.path,
			component: <Pathfinding />,
			image: pathfindingAlgorithmsImage,
			briefDescription: "Visually compare various shortest path algorithms",
			date: "April 27, 2021",
			github: githubTroyProfile + "PathfindingAlgorithms",
			youtube: youtube,
		},
		sudokuSolver: {
			label: "Sudoku Solver",
			path: routes.portfolio.sudokuSolver.path,
			component: <SudokuSolver />,
			image: sudokuSolverImage,
			briefDescription: "Solve any sudoku board with ease",
			date: "January 31, 2021",
			github: githubTroyProfile + "SudokuSolver",
			youtube: youtube,
		},
		blackJack: {
			label: "BlackJack",
			path: routes.portfolio.blackJack.path,
			component: <BlackJack />,
			image: blackJackImage,
			briefDescription: "Compete in BlackJack against the dealer",
			date: "January 24, 2021",
			github: githubTroyProfile + "BlackJack",
			youtube: youtube,
		},
		dss: {
			label: "Decision Support System",
			path: routes.portfolio.dss.path,
			component: <DSS />,
			image: decisionSupportSystemImage,
			briefDescription: "Streamline group decision-making and organization",
			date: "December 16, 2019",
			github: githubTroyProfile + "DecisionSupportSystem",
			youtube: youtube,
		},
	},
	communication: {
		literatureFair: {
			label: "Literature Fair",
			path: routes.portfolio.literatureFair.path,
			component: <LiteratureFair />,
			image: literatureFairImage,
			briefDescription: "Exploring the literary theory of existentialism",
			date: "June 6, 2019",
		},
		industry4: {
			label: "Industry 4.0",
			path: routes.portfolio.industry4.path,
			component: <Industry4 />,
			image: industry4Image,
			briefDescription: "Analyzing the fourth industrial revolution",
			date: "February 7, 2020",
		},
	},
};
