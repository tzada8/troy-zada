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
         "Moodivity is a web application that improves productivity for users while guiding them to be more in tune with their mental health",
      date: "November 22, 2020",
      github: github + "s6eskand/Moodivity",
      youtube: youtube + "watch?v=g_i8N4H7MDQ",
   },
   troyZadaWebsite: {
      title: "Troy Zada Website",
      image: troyZadaImage,
      briefDescription:
         "A website explaining who I am including experiences, qualities I possess, contact information, and more",
      date: "TODAY",
      github: githubMyProfile + "TroyZada",
      youtube: youtube,
   },
   pathfinding: {
      title: "Pathfinding Algorithms",
      image: pathfindingAlgorithmsImage,
      briefDescription:
         "Compares various pathfinding algorithms including Breadth-First Search, Depth-First Search, A*, and Dijkstra",
      date: "April 27, 2021",
      github: githubMyProfile + "PathfindingAlgorithms",
      youtube: youtube,
   },
   sudokuSolver: {
      title: "Sudoku Solver",
      image: sudokuSolverImage,
      briefDescription:
         "Uses the backtracking algorithm to solve any valid sudoku board",
      date: "January 31, 2021",
      github: githubMyProfile + "SudokuSolver",
      youtube: youtube,
   },
   blackJack: {
      title: "BlackJack",
      image: blackJackImage,
      briefDescription:
         "Play through a game of BlackJack against the dealer, starting with a given $1000",
      date: "January 24, 2021",
      github: githubMyProfile + "BlackJack",
      youtube: youtube,
   },
   dss: {
      title: "Decision Support System",
      image: decisionSupportSystemImage,
      briefDescription:
         "Simplifies university group projects by aiding in decision making while also maintaining a high degree of organization for the group",
      date: "December 16, 2019",
      github: githubMyProfile + "DecisionSupportSystem",
      youtube: youtube,
   },
   literatureFair: {
      title: "Literature Fair",
      image: literatureFairImage,
      briefDescription:
         "Focuses on the literary theory of existentialism, being that each individual is viewed as a free and responsible agent capable of decision-making to determine their lives",
      date: "June 6, 2019",
   },
   industry4: {
      title: "Industry 4.0",
      image: industry4Image,
      briefDescription:
         "A high school level analytic-based competition revolving around the fourth industrial revolution and automatization of production",
      date: "February 17, 2021",
   },
};
