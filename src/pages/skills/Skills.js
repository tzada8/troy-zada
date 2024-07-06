import React from "react";

import { skillsData } from "../../data/skills-data";

import Subtitle from "../../components/subtitle/Subtitle";
import Wordcloud from "../../components/wordcloud/Wordcloud";

export default function Skills() {
	return (
		<div>
			{skillsData.map((c, i) => (
				<div key={i}>
					<Subtitle icon={c.icon} label={c.label} topSpacing={i !== 0} />
					<Wordcloud data={c.data} highThreshold={95} />
				</div>
			))}
		</div>
	);
}
