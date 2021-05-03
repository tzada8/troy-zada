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
      briefDescription:
         "This project was made in November 2020 using the React Framework as well as Django",
      date: "December 8, 2020",
      github: github + "s6eskand/Moodivity",
      youtube: youtube,
   },
   troyZadaWebsite: {
      title: "Troy Zada Website",
      image: troyZadaImage,
      briefDescription:
         "This project was made using HTML, CSS, JavaScript, and the React framework in order to make this website",
      date: "TODAY",
      github: githubMyProfile + "TroyZada",
      youtube: youtube,
   },
   pathfinding: {
      title: "Pathfinding Algorithms",
      image: pathfindingAlgorithmsImage,
      briefDescription:
         "Used Java including the Swing GUI to create a program that visually compares pathfinding algorithms",
      date: "April 27, 2021",
      github: githubMyProfile + "PathfindingAlgorithms",
      youtube: youtube,
   },
   sudokuSolver: {
      title: "Sudoku Solver",
      image: sudokuSolverImage,
      briefDescription:
         "This project was made using the Backtracking algorithm and can solve any sudoku board",
      date: "January 31, 2021",
      github: githubMyProfile + "SudokuSolver",
      youtube: youtube,
   },
   blackJack: {
      title: "BlackJack",
      image: blackJackImage,
      briefDescription:
         "This project was made using Python in addition to Python's GUI framework Tkinter",
      date: "January 24, 2021",
      github: githubMyProfile + "BlackJack",
      youtube: youtube,
   },
   dss: {
      title: "Decision Support System",
      image: decisionSupportSystemImage,
      briefDescription:
         "This project was made using Excel VBA in order to make a project tool that aids user completing group projcets in an efficient manner",
      date: "December 16, 2019",
      github: githubMyProfile + "DecisionSupportSystem",
      youtube: youtube,
   },
   literatureFair: {
      title: "Literature Fair",
      image: literatureFairImage,
      briefDescription:
         "This project focuses on the literary theory of existentialism involving how each individual is in charge of their own lives based on their own decisions",
      date: "June 6, 2019",
   },
   industry4: {
      title: "Industry 4.0",
      image: industry4Image,
      briefDescription:
         "This project involved marketing and reaching out to fellow high school about a competition regarding optimization of factory procedures",
      date: "February 17, 2021",
   },
};
