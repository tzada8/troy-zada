// CODING PROJECT IMAGES
import troyZadaImage from "../../../../images/portfolio/coding/troy-zada.png";
import blackJackImage from "../../../../images/portfolio/coding/blackjack.png";
import moodivityImage from "../../../../images/portfolio/coding/moodivity.png";
import sudokuSolverImage from "../../../../images/portfolio/coding/sudoku-solver.png";
import decisionSupportSystemImage from "../../../../images/portfolio/coding/decision-support-system.png";
import pathfindingAlgorithmsImage from "../../../../images/portfolio/coding/pathfinding-algorithms.png";

// COMMUNICATION PROJECT IMAGES
import literatureFairImage from "../../../../images/portfolio/communication/literature-fair.png";
import industry4Image from "../../../../images/portfolio/communication/industry4.png";

const github = "https://github.com/"; // MAIN LINK TO GITHUB WEBSITE
const githubMyProfile = github + "tzada8/"; // PATH TO MY PROFILE

const youtube = "https://www.youtube.com/"; // MAIN LINK TO YOUTUBE WEBSITE

export const portfolioData = {
   moodivity: {
      title: "Moodivity",
      image: moodivityImage,
      date: "December 8, 2020",
      github: github + "s6eskand/Moodivity",
      youtube: youtube,
   },
   troyZadaWebsite: {
      title: "Troy Zada Website",
      image: troyZadaImage,
      date: "TODAY",
      github: githubMyProfile + "TroyZada",
      youtube: youtube,
   },
   pathfinding: {
      title: "Pathfinding Algorithms",
      image: pathfindingAlgorithmsImage,
      date: "April 27, 2021",
      github: githubMyProfile + "PathfindingAlgorithms",
      youtube: youtube,
   },
   sudokuSolver: {
      title: "Sudoku Solver",
      image: sudokuSolverImage,
      date: "January 31, 2021",
      github: githubMyProfile + "SudokuSolver",
      youtube: youtube,
   },
   blackJack: {
      title: "BlackJack",
      image: blackJackImage,
      date: "January 24, 2021",
      github: githubMyProfile + "BlackJack",
      youtube: youtube,
   },
   dss: {
      title: "Decision Support System",
      image: decisionSupportSystemImage,
      date: "December 16, 2019",
      github: githubMyProfile + "DecisionSupportSystem",
      youtube: youtube,
   },
   literatureFair: {
      title: "Literature Fair",
      image: literatureFairImage,
      date: "June 6, 2019",
   },
   industry4: {
      title: "Industry 4.0",
      image: industry4Image,
      date: "February 17, 2021",
   },
};
