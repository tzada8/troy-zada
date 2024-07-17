import React from "react";

import { skillsData } from "../../data/skills-data";

import SkillsBlock from "../../components/skills-block/SkillsBlock";
import Subtitle from "../../components/subtitle/Subtitle";

export default function Skills() {
	return (
		<div>
			{skillsData.map((c, i) => (
				<div key={i}>
					<Subtitle icon={c.icon} label={c.label} topSpacing={i !== 0} />
					<SkillsBlock data={c.data} />
				</div>
			))}
		</div>
	);
}
