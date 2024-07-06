import React from "react";

import { skillsData } from "../../data/skills-data";

import ProgressBar from "../../components/progress-bar/ProgressBar";
import Subtitle from "../../components/subtitle/Subtitle";

export default function Skills() {
	return (
		<div>
			{skillsData.map((c, i) => (
				<div key={i}>
					<Subtitle icon={c.icon} label={c.label} topSpacing={i !== 0} />
					{c.data.map((s, k) => <ProgressBar
						key={k}
						label={s.label}
						percent={s.percent}
					/>)}
				</div>
			))}
		</div>
	);
}
