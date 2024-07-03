import { BASE_GITHUB } from "../data/constants";
import { rootRoutes } from "./root-routes";

// Images
import blackJackImage from "../images/portfolio/blackjack.png";
import decisionSupportSystemImage from "../images/portfolio/decision-support-system.png";
import moodivityImage from "../images/portfolio/moodivity.png";
import pathfindingImage from "../images/portfolio/pathfinding-algorithms.png";
import sudokuSolverImage from "../images/portfolio/sudoku-solver.png";
import troyZadaImage from "../images/portfolio/troy-zada.png";

// Components
import BlackJack from "../pages/portfolio/projects/BlackJack";
import DSS from "../pages/portfolio/projects/DSS";
import Moodivity from "../pages/portfolio/projects/Moodivity";
import Pathfinding from "../pages/portfolio/projects/Pathfinding";
import SudokuSolver from "../pages/portfolio/projects/SudokuSolver";
import TroyZada from "../pages/portfolio/projects/TroyZada";

// TODO: Maybe change date to a duration like "September 2018 - June 2019".
export const portfolioRoutes = [
    {
        label: "Moodivity",
        path: `${rootRoutes.portfolio.path}/moodivity`,
        element: <Moodivity />,
        image: moodivityImage,
        tagline: "Boost productivity while balancing mental health",
        date: "November 2020",
        github: `${BASE_GITHUB}/s6eskand/Moodivity`,
    },
    {
        label: "Troy Zada Website",
        path: `${rootRoutes.portfolio.path}/troyzada`,
        element: <TroyZada />,
        image: troyZadaImage,
        tagline: "Discover my experiences, qualities, and overall portfolio",
        date: "July 2024",
        github: `${BASE_GITHUB}/tzada8/troyzada`,
    },
    {
        label: "Pathfinding Algorithms",
        path: `${rootRoutes.portfolio.path}/pathfinding`,
        element: <Pathfinding />,
        image: pathfindingImage,
        tagline: "Visually compare various shortest path algorithms",
        date: "April 2021",
        github: `${BASE_GITHUB}/tzada8/pathfinding-algorithms`,
    },
    {
        label: "Sudoku Solver",
        path: `${rootRoutes.portfolio.path}/sudoku-solver`,
        element: <SudokuSolver />,
        image: sudokuSolverImage,
        tagline: "Solve any sudoku board with ease",
        date: "January 2021",
        github: `${BASE_GITHUB}/tzada8/sudoku-solver`,
    },
    {
        label: "BlackJack",
        path: `${rootRoutes.portfolio.path}/blackjack`,
        element: <BlackJack />,
        image: blackJackImage,
        tagline: "Compete in BlackJack against the dealer",
        date: "January 2021",
        github: `${BASE_GITHUB}/tzada8/BlackJack`,
    },
    {
        label: "Decision Support System",
        path: `${rootRoutes.portfolio.path}/decision-support-system`,
        element: <DSS />,
        image: decisionSupportSystemImage,
        tagline: "Streamline group decision-making and organization",
        date: "December 2019",
        github: `${BASE_GITHUB}/tzada8/DecisionSupportSystem`,
    },
]
