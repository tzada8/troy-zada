import React from "react";

import { experienceData } from "../../data/experience-data";

import Subtitle from "../../components/subtitle/Subtitle";
import WorkInfo from "../../components/work-info/WorkInfo";

export default function Experience() {
	return (
		<div>
			{Object.keys(experienceData).map((k, i) => (
				<div>
					<Subtitle
						icon={experienceData[k].icon}
						label={experienceData[k].label}
						topSpacing={i !== 0}
					/>
					{experienceData[k].data.map((w, kk) => <WorkInfo
						key={kk}
						label={w.label}
						company={w.company}
						duration={w.duration}
						details={w.details}
					/>)}
				</div>
			))}
		</div>
	);
}
