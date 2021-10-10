import React from "react";
import CodingProjectPost from "../../project_post/coding/CodingProjectPost";
import { portfolioCodingData } from "../../PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

function SudokuSolver() {
	const sudokuSolver = portfolioCodingData.sudokuSolver;
	return (
		<div>
			<CodingProjectPost
				projectTitle={sudokuSolver.title}
				src={sudokuSolver.image}
				date={sudokuSolver.date}
				github={sudokuSolver.github}
				youtube={sudokuSolver.youtube}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}

export default SudokuSolver;
