import React from "react";

import { experienceData } from "../../data/ExperienceData";
import { contact, routes } from "../../routes/routes";

import RoutingButton from "../../components/button/RoutingButton";
import Subtitle from "../../components/subtitle/Subtitle";
import WorkInfo from "../../components/work-info/WorkInfo";
import "./Experience.css";

export default function Experience() {
	const getInTouchButton = <RoutingButton
		path={routes[contact].path}
		label="GET IN TOUCH"
		icon="fas fa-file-download"
	/>;

	return (
		<div>
			{getInTouchButton}
			{Object.keys(experienceData).map(k => {
				return (
					<div>
						<Subtitle icon={experienceData[k].icon} label={experienceData[k].label} />
						{experienceData[k].data.map((w, kk) => <WorkInfo
							key={kk}
							label={w.label}
							company={w.company}
							duration={w.duration}
							description={w.description}
						/>)}
					</div>
				);
			})}
			{getInTouchButton}
		</div>
	);
}
