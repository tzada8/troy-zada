import React from "react";

import { experienceData } from "../../data/experience-data";

import Subtitle from "../../components/subtitle/Subtitle";
import WorkInfo from "../../components/work-info/WorkInfo";

export default function Experience() {
	return (
		<div>
			{experienceData.map((exp, i) => (
				<div key={i}>
					<Subtitle icon={exp.icon} label={exp.label} topSpacing={i !== 0} />
					{exp.data.map((w, k) => (
						<WorkInfo
							key={k}
							label={w.label}
							company={w.company}
							duration={w.duration}
							details={w.details}
						/>
					))}
				</div>
			))}
		</div>
	);
}
