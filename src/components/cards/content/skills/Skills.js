import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProgressBar from "./progress_bar/ProgressBar";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";

function Skills() {
	return (
		<div>
			{/* GROUP OF INTERPERSONAL SKILLS */}
			<Subtitle icon="fas fa-users" label="Interpersonal Skills" />
			<ul>
				<ProgressBar label="Communcation" percent="96%" />
				<ProgressBar label="Problem Solving" percent="92%" />
				<ProgressBar label="Willingness to Learn" percent="100%" />
				<ProgressBar label="Time Management" percent="89%" />
				<ProgressBar label="Punctuality" percent="88%" />
				<ProgressBar label="Detail-Oriented" percent="98%" />
				<ProgressBar label="Cross-Functional" percent="86%" />
				<ProgressBar label="Teamwork" percent="90%" />
			</ul>

			<GroupsDivider />

			{/* GROUP OF PROFESSIONAL SKILLS */}
			<Subtitle icon="fas fa-cogs" label="Professional Skills" />
			<ul>
				<ProgressBar label="Java" percent="82%" />
				<ProgressBar label="Python" percent="74%" />
				<ProgressBar label="HTML" percent="84%" />
				<ProgressBar label="CSS" percent="80%" />
				<ProgressBar label="Excel VBA" percent="58%" />
				<ProgressBar label="React" percent="78%" />
				<ProgressBar label="JavaScript" percent="68%" />
				<ProgressBar label="R" percent="48%" />
			</ul>
		</div>
	);
}

export default Skills;
