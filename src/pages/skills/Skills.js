import React from "react";

import { skillsData } from "../../data/skills/SkillsData";

import GroupsDivider from "../../components/cards/content/extra-components/groups-divider/GroupsDivider";
import ProgressBar from "../../components/cards/content/skills/progress-bar/ProgressBar";
import Subtitle from "../../components/subtitle/Subtitle";
import "./Skills.css";

export default function Skills() {
	function displaySkillsData(data) {
		return (
			<ul>
				{data.map((i) => (
					<ProgressBar label={i.label} percent={i.percent} key={i.label} />
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
