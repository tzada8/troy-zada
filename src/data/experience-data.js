import { MdWork } from "react-icons/md";

export const experienceData = [
	{
		label: "Work Experience",
		icon: <MdWork />,
		data: [
			{
				label: "Programming Teaching Assistant",
				company: "University of Waterloo",
				duration: "Jan 2021 - Apr 2021",
				details: [
					"Generated unique content and explanations to teach complex Java programming concepts to students.",
					"Validated all content released from the teaching end to ensure all content was sound.",
					"Reviewed student's assessments to ensure answers were correct, and if not, spent time discussing and explaining the correct approach to them.",
				],
			},
			{
				label: "Design and Manufacturing Technician",
				company: "EngineeringCPR",
				duration: "Apr 2020 - Sept 2020",
				details: [
					"Worked in a manufacturing environment assembling fixtures through soldering, comprehending electrical schematics, and optimizing component placements.",
					"Primary focus involved manufacturing test fixtures as well as creating corresponding work instructions in order to test 1200 ventilator systems (being required due to COVID-19).",
				],
			},
			{
				label: "Machine Shop Assistant",
				company: "CANASTAMPI inc.",
				duration: "June 2019 - Aug 2019",
				details: [
					"Operated and programmed numerous machines including a CNC Milling Machine, Lathe, Drill Press, and Pantograph to engrave, polish, and mill various parts.",
					"Validated that each part precisely met drawing specifications.",
				],
			},
		],
	},
];
