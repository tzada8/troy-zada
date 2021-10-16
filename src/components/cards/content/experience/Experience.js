import React from "react";
import Subtitle from "../extra-components/subtitle/Subtitle";
import WorkCard from "./work-card/WorkCard";
import LinkToContact from "../extra-components/link-to-contact/LinkToContact";
import GroupsDivider from "../extra-components/groups-divider/GroupsDivider";
import { experienceData } from "../../../../data/experience/ExperienceData";
import "./Experience.css";

function Experience() {
	return (
		<div>
			<LinkToContact />
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
				label={
					experienceData.workExperience.programmingTeachingAssistant.label
				}
				company={
					experienceData.workExperience.programmingTeachingAssistant
						.company
				}
				duration={
					experienceData.workExperience.programmingTeachingAssistant
						.duration
				}
				description={
					experienceData.workExperience.programmingTeachingAssistant
						.description
				}
			/>
			<WorkCard
				label={
					experienceData.workExperience.designAndManufacturingTechnician
						.label
				}
				company={
					experienceData.workExperience.designAndManufacturingTechnician
						.company
				}
				duration={
					experienceData.workExperience.designAndManufacturingTechnician
						.duration
				}
				description={
					experienceData.workExperience.designAndManufacturingTechnician
						.description
				}
			/>
			<WorkCard
				label={experienceData.workExperience.machineShopAssistant.label}
				company={experienceData.workExperience.machineShopAssistant.company}
				duration={
					experienceData.workExperience.machineShopAssistant.duration
				}
				description={
					experienceData.workExperience.machineShopAssistant.description
				}
			/>

			<GroupsDivider />

			<Subtitle icon="fas fa-award" label="Awards" />
			<WorkCard
				label={experienceData.awards.gonzagaLeadershipAward.label}
				duration={experienceData.awards.gonzagaLeadershipAward.duration}
				description={
					experienceData.awards.gonzagaLeadershipAward.description
				}
			/>
			<WorkCard
				label={experienceData.awards.michaelKimAward.label}
				duration={experienceData.awards.michaelKimAward.duration}
				description={experienceData.awards.michaelKimAward.description}
			/>
			<WorkCard
				label={experienceData.awards.knightsOfColombusAward.label}
				duration={experienceData.awards.knightsOfColombusAward.duration}
				description={
					experienceData.awards.knightsOfColombusAward.description
				}
			/>

			<GroupsDivider />

			<LinkToContact />
		</div>
	);
}

export default Experience;
