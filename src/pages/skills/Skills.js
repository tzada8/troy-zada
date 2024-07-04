import React from "react";

import { skillsData } from "../../data/skills-data";

import ProgressBar from "../../components/progress-bar/ProgressBar";
import Subtitle from "../../components/subtitle/Subtitle";

export default function Skills() {
	return (
		<div>
			{Object.keys(skillsData).map(k => (
				<div>
					<Subtitle icon={skillsData[k].icon} label={skillsData[k].label} />
					{skillsData[k].data.map((s, kk) => <ProgressBar
						key={kk}
						label={s.label}
						percent={s.percent}
					/>)}
				</div>
			))}
		</div>
	);
}
