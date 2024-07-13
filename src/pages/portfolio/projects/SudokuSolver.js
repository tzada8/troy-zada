import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function SudokuSolver() {
	return (
		<div>
			<Subheading label="About the Application" />
			<Paragraph content="Sudoku Solver provides users with the ability to solve any Sudoku puzzle with ease. Anytime they get stuck on a puzzle and cannot solve the board, this application provides that assistance." />
			<Paragraph content="Users can input any Sudoku board, and the application will solve the board for them. If no solution exists, the application notifies the user." />

			<Subheading label="Tech Stack" />
			<GroupedList header="Frontend" bullets={[
				{label: "Tkinter", content: "UI framework"},
			]}/>

			<GroupedList header="Backend" bullets={[
				{label: "Python", content: "Backend language"},
			]}/>

			<GroupedList header="Algorithms" bullets={[
				{label: "Backtracking", content: "Incrementally builds candidates for solutions and abandons a candidate as soon as it determines the candidate cannot lead to a valid solution"},
			]}/>

			<Subheading label="Technical Functionality" />
			<Paragraph content="Users can either solve the current board or create a new board layout. When creating a board layout, users can insert numbers within each cell of the Sudoku board. Similarly, when solving the current board, users can specify if they are interested in visually seeing the backtracking algorithm in action or if they would prefer to just see the final solution." />
			<Paragraph last content="Visually displaying the backtracking algorithm will show green and red tiles, depicting the tiles that were just placed or removed in order to reach the valid solution." />
		</div>
	);
}
