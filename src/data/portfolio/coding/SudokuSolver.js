import React from "react";
import ProjectPost from "../../../components/cards/content/portfolio/project-post/ProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";

function SudokuSolver() {
	const sudokuSolver = portfolioData.coding.sudokuSolver;
	return (
		<div>
			<ProjectPost
				label={sudokuSolver.label}
				src={sudokuSolver.image}
				date={sudokuSolver.date}
				github={sudokuSolver.github}
				youtube={sudokuSolver.youtube}
				isCoding={true}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}

export default SudokuSolver;
