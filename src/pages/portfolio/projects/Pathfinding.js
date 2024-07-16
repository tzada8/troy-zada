import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function Pathfinding() {
	return (
		<div>
			<Subheading label="About the Application" />
			<Paragraph content="Understanding the purpose behind algorithms and how they operate can drastically improve overall learnings. By constructing an application to visually compare four differing shortest path algorithms, the benefits and drawbacks of each algorithm can easily be identified." />
			<Paragraph content="For instance, the A* algorithm can determine the shortest distance the fastest but requires the end tile to be known beforehand. The other algorithms, however, can determine the shortest distance without require any comprehension of the end tile." />

			<Subheading label="Tech Stack" />
			<GroupedList
				header="Frontend"
				bullets={[{ label: "Java Swing", content: "GUI for visual elements" }]}
			/>

			<GroupedList
				header="Backend"
				bullets={[
					{
						label: "Java",
						content: "Language for the algorithms, obstacles, and features",
					},
				]}
			/>

			<GroupedList
				header="Algorithms"
				bullets={[
					{
						label: "Breadth-First Search",
						content:
							"Views tiles closest to the start tile, spreading out evenly on all sides",
					},
					{
						label: "Depth-First Search",
						content:
							"Fully attempts one path until a dead end is reached before moving onto another path",
					},
					{
						label: "A*",
						content:
							"Calculates a G, H and F cost for the current tile, being the distances between the start/end tile to the current tile to determine the direction",
					},
					{ label: "Dijkstra", content: "Views tiles closest to the start tile" },
				]}
			/>

			<Subheading label="Technical Functionality" />
			<Paragraph content="A settings component of the entire application allows the user to adjust parameters before running the pathfinding. Users can start the pathfinding, clear the board, choose if they want to visually see the solution, choose between which algorithm to use, and choose between which obstacles to place." />
			<Paragraph content="Users can manually draw obstacles themselves or choose from one of the preset options. Once a particular algorithm and obstacle is selected, the user can specify if they want to visually see the solution unfold or if they just want to see the final solution." />
			<Paragraph
				last
				content="Visually displaying the solution will individually render the tiles to portray how the algorithm determines the shortest path within the given set of obstacles. Red and green tiles will appear depicting which tiles the algorithm needed to check before reaching the end tile. If no solution exists, a popup message will inform the user that there is no possible path between the start and end tiles."
			/>
		</div>
	);
}
