import { BASE_GITHUB } from "./constants";
import { rootRoutes } from "../routes/root-routes";

// Images
import juxtaposeImage from "../images/portfolio/juxtapose.png";
import moodivityImage from "../images/portfolio/moodivity.png";
import noDataImage from "../images/portfolio/no-data.png";
import pathfindingImage from "../images/portfolio/pathfinding-algorithms.png";
import ResumeClassifierImage from "../images/portfolio/resume-classifier.png";
import sudokuSolverImage from "../images/portfolio/sudoku-solver.png";
import troyZadaImage from "../images/portfolio/troy-zada.png";

// Components
import Juxtapose from "../pages/portfolio/projects/Juxtapose";
import Moodivity from "../pages/portfolio/projects/Moodivity";
import NoData from "../pages/portfolio/projects/NoData";
import Pathfinding from "../pages/portfolio/projects/Pathfinding";
import ResumeClassifier from "../pages/portfolio/projects/ResumeClassifier";
import SudokuSolver from "../pages/portfolio/projects/SudokuSolver";
import TroyZada from "../pages/portfolio/projects/TroyZada";

export const portfolioData = [
    {
        label: "Juxtapose",
        path: `${rootRoutes.portfolio.path}/juxtapose`,
        element: <Juxtapose />,
        image: juxtaposeImage,
        tagline: "Recommendation and comparison application for improving purchasing decisions",
        date: "May 2023 - Apr. 2024",
        github: `${BASE_GITHUB}/tzada8/capstone`,
    },
	{
		label: "NoData",
        path: `${rootRoutes.portfolio.path}/no-data`,
        element: <NoData />,
        image: noDataImage,
        tagline: "Search the Internet without access to data or Wi-Fi",
        date: "May 2022",
        github: `${BASE_GITHUB}/ryanshepps/NoData`,
	},
    {
        label: "Troy Zada Website",
        path: `${rootRoutes.portfolio.path}/troy-zada`,
        element: <TroyZada />,
        image: troyZadaImage,
        tagline: "Discover my experiences, qualities, and overall portfolio",
        date: "Feb. 2021 - July 2024",
        github: `${BASE_GITHUB}/tzada8/troyzada`,
    },
    {
        label: "Pathfinding Algorithms",
        path: `${rootRoutes.portfolio.path}/pathfinding`,
        element: <Pathfinding />,
        image: pathfindingImage,
        tagline: "Visually compare various shortest path algorithms",
        date: "Apr. 2021",
        github: `${BASE_GITHUB}/tzada8/pathfinding-algorithms`,
    },
    {
        label: "Sudoku Solver",
        path: `${rootRoutes.portfolio.path}/sudoku-solver`,
        element: <SudokuSolver />,
        image: sudokuSolverImage,
        tagline: "Solve any sudoku board with ease",
        date: "Jan. 2021",
        github: `${BASE_GITHUB}/tzada8/sudoku-solver`,
    },
    {
		label: "Resume Classifier",
        path: `${rootRoutes.portfolio.path}/resume-classifier`,
        element: <ResumeClassifier />,
        image: ResumeClassifierImage,
        tagline: "Predicted the probability of receiving an interview depending on the resume",
        date: "Jan. 2022 - Apr. 2022",
        github: `${BASE_GITHUB}/rrokhit/resume-classifier`,
	},
    {
        label: "Moodivity",
        path: `${rootRoutes.portfolio.path}/moodivity`,
        element: <Moodivity />,
        image: moodivityImage,
        tagline: "Boost productivity while balancing mental health",
        date: "Nov. 2020",
        github: `${BASE_GITHUB}/s6eskand/Moodivity`,
    },
]
