import React from "react";
import Subtitle from "../extra-components/subtitle/Subtitle";
import ProgressBar from "./progress-bar/ProgressBar";
import GroupsDivider from "../extra-components/groups-divider/GroupsDivider";
import { skillsData } from "../../../../data/skills/SkillsData";

function Skills() {
	function displaySkillsData(data) {
		return (
			<ul>
				{data.map((i) => (
					<ProgressBar label={i.label} percent={i.percent} />
				))}
			</ul>
		);
	}

	const displayInterpersonalData = displaySkillsData(skillsData.interpersonal);
	const displayTechnicalData = displaySkillsData(skillsData.technical);

	return (
		<div>
			<Subtitle icon="fas fa-users" label="Interpersonal Skills" />
			{displayInterpersonalData}
			<GroupsDivider />
			<Subtitle icon="fas fa-cogs" label="Technical Skills" />
			{displayTechnicalData}
		</div>
	);
}

export default Skills;
