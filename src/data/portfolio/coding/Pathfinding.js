import React from "react";
import CodingProjectPost from "../../../components/cards/content/portfolio/project-post/coding/CodingProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";
import TypeOfTech from "../../components/TypeOfTech";
import TechListItem from "../../components/TechListItem";

function Pathfinding() {
	const pathfinding = portfolioData.coding.pathfinding;
	return (
		<div>
			<CodingProjectPost
				label={pathfinding.label}
				src={pathfinding.image}
				date={pathfinding.date}
				github={pathfinding.github}
				youtube={pathfinding.youtube}
			/>

			<Subheading subheading="About the Application" />
			<Paragraph content="Determining the shortest distance between two points is a crucial aspect in day to day life. This application does exactly that. It determines the shortest distance between two points in any given obstacle using different approaches." />
			<Paragraph content="With this Pathfinding Algorithms application, users can draw unique obstacles or choose one of the preset ones, and the shortest path between the start point and endpoint will be determined. " />
			<Paragraph content="The user also has the option to watch the solution unfold or to choose between algorithms such that they may see the differences between how each algorithm works. " />

			<Subheading subheading="Tech Stack" />
			<TypeOfTech type="Frontend" />
			<ul>
				<TechListItem
					language="Java Swing"
					description="GUI for visual elements"
				/>
			</ul>
			<br />

			<TypeOfTech type="Backend" />
			<ul>
				<TechListItem
					language="Java"
					description="Language for the algorithms, obstacles, and features"
				/>
			</ul>
			<br />

			<Subheading subheading="Application's Functionality" />
			<Paragraph content="A settings component of the entire application allows the user to start the pathfinding, reset the board, see the steps of the solution, choose between different algorithms, and choose between different obstacles. " />
			<Paragraph content="If a different obstacle is chosen, then the board resets, and the new obstacle is drawn instead. If a different algorithm is chosen, then the application remembers this algorithm for when the pathfinding begins. " />
			<Paragraph content="The application has several different algorithms to choose from including:" />
			<ul>
				<TechListItem
					language="Breadth-First Search"
					description="Checks the board by viewing the tiles closest to the start tile, then spreading out"
				/>
				<TechListItem
					language="Depth-First Search"
					description="Fully attempts one path until a dead end is reached, then attempts another"
				/>
				<TechListItem
					language="A*"
					description="Calculates a G, H and F cost for the current tile, being the distances between the start/end tile and the current tile"
				/>
				<TechListItem
					language="Dijkstra"
					description="Checks tiles that are closest to the start tile"
				/>
			</ul>
			<br />
			<Paragraph content="Once an algorithm and obstacle are chosen, the user can then choose to see the steps or just view the solution. Seeing the steps will render red and green tiles to depict how the algorithm runs and which tiles it checks. " />
		</div>
	);
}

export default Pathfinding;
