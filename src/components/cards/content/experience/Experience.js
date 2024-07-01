import React from "react";

import { experienceData } from "../../../../data/experience/ExperienceData";
import { navbarData } from "../../../../data/NavbarData";

import GroupsDivider from "../extra-components/groups-divider/GroupsDivider";
import RoutingButton from "../../../button/RoutingButton";
import Subtitle from "../../../subtitle/Subtitle";
import WorkInfo from "../../../work-info/WorkInfo";
import "./Experience.css";

function Experience() {
	return (
		<div>
			<RoutingButton
				path={navbarData.contact.path}
				label="GET IN TOUCH"
				icon="fas fa-file-download"
			/>
			<Subtitle icon="fas fa-university" label="Education" />
			<WorkInfo
				label={experienceData.education.managementEngineering.label}
				company={experienceData.education.managementEngineering.company}
				duration={experienceData.education.managementEngineering.duration}
				description={
					experienceData.education.managementEngineering.description
				}
			/>

			<GroupsDivider />

			<Subtitle icon="fas fa-briefcase" label="Work Experience" />
			<WorkInfo
				label={experienceData.work.programmingTeachingAssistant.label}
				company={experienceData.work.programmingTeachingAssistant.company}
				duration={experienceData.work.programmingTeachingAssistant.duration}
				description={
					experienceData.work.programmingTeachingAssistant.description
				}
			/>
			<WorkInfo
				label={experienceData.work.designAndManufacturingTechnician.label}
				company={
					experienceData.work.designAndManufacturingTechnician.company
				}
				duration={
					experienceData.work.designAndManufacturingTechnician.duration
				}
				description={
					experienceData.work.designAndManufacturingTechnician.description
				}
			/>
			<WorkInfo
				label={experienceData.work.machineShopAssistant.label}
				company={experienceData.work.machineShopAssistant.company}
				duration={experienceData.work.machineShopAssistant.duration}
				description={experienceData.work.machineShopAssistant.description}
			/>

			<GroupsDivider />

			<Subtitle icon="fas fa-award" label="Awards" />
			<WorkInfo
				label={experienceData.awards.gonzagaLeadership.label}
				duration={experienceData.awards.gonzagaLeadership.duration}
				description={experienceData.awards.gonzagaLeadership.description}
			/>
			<WorkInfo
				label={experienceData.awards.michaelKim.label}
				duration={experienceData.awards.michaelKim.duration}
				description={experienceData.awards.michaelKim.description}
			/>
			<WorkInfo
				label={experienceData.awards.knightsOfColombus.label}
				duration={experienceData.awards.knightsOfColombus.duration}
				description={experienceData.awards.knightsOfColombus.description}
			/>

			<GroupsDivider />

			<RoutingButton
				path={navbarData.contact.path}
				label="GET IN TOUCH"
				icon="fas fa-file-download"
			/>
		</div>
	);
}

export default Experience;
