import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import WorkCard from "./work_card/WorkCard";
import LinkToContact from "../extra_components/link_to_contact/LinkToContact";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";
import { experienceData } from "../../../../data/ExperienceData";
import "./Experience.css";

function Experience() {
	return (
		<div>
			<LinkToContact />
			<Subtitle icon="fas fa-university" label="Education" />
			<WorkCard
				title={experienceData.education.managementEngineering.title}
				company={experienceData.education.managementEngineering.company}
				duration={experienceData.education.managementEngineering.duration}
				description={
					experienceData.education.managementEngineering.description
				}
			/>

			<GroupsDivider />

			<Subtitle icon="fas fa-briefcase" label="Work Experience" />
			<WorkCard
				title={
					experienceData.workExperience.programmingTeachingAssistant.title
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
				title={
					experienceData.workExperience.designAndManufacturingTechnician
						.title
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
				title={experienceData.workExperience.machineShopAssistant.title}
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
				title={experienceData.awards.gonzagaLeadershipAward.title}
				duration={experienceData.awards.gonzagaLeadershipAward.duration}
				description={
					experienceData.awards.gonzagaLeadershipAward.description
				}
			/>
			<WorkCard
				title={experienceData.awards.michaelKimAward.title}
				duration={experienceData.awards.michaelKimAward.duration}
				description={experienceData.awards.michaelKimAward.description}
			/>
			<WorkCard
				title={experienceData.awards.knightsOfColombusAward.title}
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
