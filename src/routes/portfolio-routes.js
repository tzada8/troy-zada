import { BASE_GITHUB } from "../data/constants";
import { rootRoutes } from "./root-routes";

// Images
import blackJackImage from "../images/portfolio/coding/blackjack.png";
import decisionSupportSystemImage from "../images/portfolio/coding/decision-support-system.png";
import industry4Image from "../images/portfolio/communication/industry4.png";
import literatureFairImage from "../images/portfolio/communication/literature-fair.png";
import moodivityImage from "../images/portfolio/coding/moodivity.png";
import pathfindingImage from "../images/portfolio/coding/pathfinding-algorithms.png";
import sudokuSolverImage from "../images/portfolio/coding/sudoku-solver.png";
import troyZadaImage from "../images/portfolio/coding/troy-zada.png";

// Components
import BlackJack from "../pages/portfolio/projects/BlackJack";
import DSS from "../pages/portfolio/projects/DSS";
import Industry4 from "../pages/portfolio/projects/Industry4";
import LiteratureFair from "../pages/portfolio/projects/LiteratureFair";
import Moodivity from "../pages/portfolio/projects/Moodivity";
import Pathfinding from "../pages/portfolio/projects/Pathfinding";
import SudokuSolver from "../pages/portfolio/projects/SudokuSolver";
import TroyZada from "../pages/portfolio/projects/TroyZada";

// TODO: Probably remove "communication" projects.
// TODO: Maybe change date to a duration like "September 2018 - June 2019".
export const portfolioRoutes = {
    coding: [
        {
            label: "Moodivity",
            path: `${rootRoutes.portfolio.path}/moodivity`,
            element: <Moodivity />,
            image: moodivityImage,
            briefDescription: "Boost productivity while balancing mental health",
            date: "November 2020",
            github: `${BASE_GITHUB}/s6eskand/Moodivity`,
        },
        {
            label: "Troy Zada Website",
            path: `${rootRoutes.portfolio.path}/troyzada`,
            element: <TroyZada />,
            image: troyZadaImage,
            briefDescription: "Discover my experiences, qualities, and overall portfolio",
            date: "July 2024",
            github: `${BASE_GITHUB}/tzada8/troyzada`,
        },
        {
            label: "Pathfinding Algorithms",
            path: `${rootRoutes.portfolio.path}/pathfinding`,
            element: <Pathfinding />,
            image: pathfindingImage,
            briefDescription: "Visually compare various shortest path algorithms",
            date: "April 2021",
            github: `${BASE_GITHUB}/tzada8/pathfinding-algorithms`,
        },
        {
            label: "Sudoku Solver",
            path: `${rootRoutes.portfolio.path}/sudoku-solver`,
            element: <SudokuSolver />,
            image: sudokuSolverImage,
            briefDescription: "Solve any sudoku board with ease",
            date: "January 2021",
            github: `${BASE_GITHUB}/tzada8/sudoku-solver`,
        },
        {
            label: "BlackJack",
            path: `${rootRoutes.portfolio.path}/blackjack`,
            element: <BlackJack />,
            image: blackJackImage,
            briefDescription: "Compete in BlackJack against the dealer",
            date: "January 2021",
            github: `${BASE_GITHUB}/tzada8/BlackJack`,
        },
        {
            label: "Decision Support System",
            path: `${rootRoutes.portfolio.path}/decision-support-system`,
            element: <DSS />,
            image: decisionSupportSystemImage,
            briefDescription: "Streamline group decision-making and organization",
            date: "December 2019",
            github: `${BASE_GITHUB}/tzada8/DecisionSupportSystem`,
        },
    ],
    communication: [
        {
            label: "Literature Fair",
            path: `${rootRoutes.portfolio.path}/literature-fair`,
			element: <LiteratureFair />,
			image: literatureFairImage,
			briefDescription: "Exploring the literary theory of existentialism",
			date: "June 2019",
        },
        {
            label: "Industry 4.0",
            path: `${rootRoutes.portfolio.path}/industry4`,
			element: <Industry4 />,
			image: industry4Image,
			briefDescription: "Analyzing the fourth industrial revolution",
			date: "February 2020",
        },
    ],
}
