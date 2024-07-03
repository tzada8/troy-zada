import React from "react";

import { portfolio, routes } from "../../../routes/routes";

import DetailedPost from "../../../components/detailed-post/DetailedPost";
import Paragraph from "../../../data/components/Paragraph";
import Subheading from "../../../data/components/Subheading";

export default function SudokuSolver() {
	const sudokuSolver = routes[portfolio].subroutes.coding[3];
	return (
		<div>
			<DetailedPost
				label={sudokuSolver.label}
				src={sudokuSolver.image}
				details={`Troy Zada \u00A0|\u00A0 ${sudokuSolver.date}`}
				github={sudokuSolver.github}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}
