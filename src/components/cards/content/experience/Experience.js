import React from "react";
import Subtitle from "../../../subtitle/Subtitle";
import WorkCard from "./work-card/WorkCard";
import LinkToInternal from "../extra-components/link-to-internal/LinkToInternal";
import GroupsDivider from "../extra-components/groups-divider/GroupsDivider";
import { experienceData } from "../../../../data/experience/ExperienceData";
import { navbarData } from "../../../../data/NavbarData";
import "./Experience.css";

function Experience() {
	return (
		<div>
			<LinkToInternal
				path={navbarData.contact.path}
				label="GET IN TOUCH"
				icon="fas fa-file-download"
			/>
			<Subtitle icon="fas fa-university" label="Education" />
			<WorkCard
				label={experienceData.education.managementEngineering.label}
				company={experienceData.education.managementEngineering.company}
				duration={experienceData.education.managementEngineering.duration}
				description={
					experienceData.education.managementEngineering.description
				}
			/>

			<GroupsDivider />

			<Subtitle icon="fas fa-briefcase" label="Work Experience" />
			<WorkCard
				label={experienceData.work.programmingTeachingAssistant.label}
				company={experienceData.work.programmingTeachingAssistant.company}
				duration={experienceData.work.programmingTeachingAssistant.duration}
				description={
					experienceData.work.programmingTeachingAssistant.description
				}
			/>
			<WorkCard
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
			<WorkCard
				label={experienceData.work.machineShopAssistant.label}
				company={experienceData.work.machineShopAssistant.company}
				duration={experienceData.work.machineShopAssistant.duration}
				description={experienceData.work.machineShopAssistant.description}
			/>

			<GroupsDivider />

			<Subtitle icon="fas fa-award" label="Awards" />
			<WorkCard
				label={experienceData.awards.gonzagaLeadership.label}
				duration={experienceData.awards.gonzagaLeadership.duration}
				description={experienceData.awards.gonzagaLeadership.description}
			/>
			<WorkCard
				label={experienceData.awards.michaelKim.label}
				duration={experienceData.awards.michaelKim.duration}
				description={experienceData.awards.michaelKim.description}
			/>
			<WorkCard
				label={experienceData.awards.knightsOfColombus.label}
				duration={experienceData.awards.knightsOfColombus.duration}
				description={experienceData.awards.knightsOfColombus.description}
			/>

			<GroupsDivider />

			<LinkToInternal
				path={navbarData.contact.path}
				label="GET IN TOUCH"
				icon="fas fa-file-download"
			/>
		</div>
	);
}

export default Experience;
