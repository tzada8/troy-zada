import React from "react";

import { educationData } from "../../data/education-data";

import Subtitle from "../../components/subtitle/Subtitle";
import WorkInfo from "../../components/work-info/WorkInfo";

export default function Education() {
	return (
		<div>
			{educationData.map((e, i) => (
				<div key={i}>
					<Subtitle icon={e.icon} label={e.label} topSpacing={i !== 0} />
					{e.data.map((w, k) => (
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
