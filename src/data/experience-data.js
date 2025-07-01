import React from "react";
import { FaIndustry, FaSchool } from "react-icons/fa6";

export const experienceData = [
	{
		label: "Teaching",
		icon: <FaSchool />,
		data: [
			{
				label: "Decision Support Systems Teaching Assistant",
				company: "University of Waterloo",
				duration: "May 2025 - Aug 2025",
				details: [
					"Taught data engineering concepts such as transformations, predictions, and pyspark.",
					"Promptly graded student assessments.",
				],
			},
			{
				label: "Advanced Machine Learning Teaching Assistant",
				company: "University of Waterloo",
				duration: "Jan 2025 - Apr 2025",
				details: [
					"Taught machine learning concepts such as neural networks, ensemble methods, and regression.",
					"Promptly graded student assessments.",
				],
			},
			{
				label: "Python Programming Teaching Assistant",
				company: "University of Waterloo",
				duration: "Sep 2024 - Dec 2024",
				details: [
					"Taught Python programming concepts such as classes, looping, and testing.",
					"Promptly graded student assessments.",
				],
			},
			{
				label: "Java Programming Teaching Assistant",
				company: "University of Waterloo",
				duration: "Jan 2021 - Apr 2021",
				details: [
					"Taught Java programming concepts such as classes, looping, and testing.",
					"Promptly graded student assessments.",
				],
			},
		],
	},
	{
		label: "Industry",
		icon: <FaIndustry />,
		data: [
			{
				label: "Data Engineer",
				company: "Super.com",
				duration: "Jan 2023 - Jun 2024",
				details: [
					"Optimized database storage and compute usage resulting in drastic cost savings.",
					"Setup weekly pipelines to generate sitemaps.",
				],
			},
			{
				label: "Software Engineer",
				company: "FundThrough",
				duration: "May 2022 - Aug 2022",
				details: [
					"Strengthened the application's infrastructure by updating project dependencies.",
					"Integrated Slack to automate the process of sending approval messages.",
				],
			},
			{
				label: "Software Engineer",
				company: "TribalScale",
				duration: "Sep 2021 - Dec 2021",
				details: [
					"Constructed a web application to increase project allocation productivity.",
					"Collaborated in a pair programming environment focused on efficiently developing the backend of a client's car dealership application.",
				],
			},
			{
				label: "Design and Manufacturing Technician",
				company: "EngineeringCPR",
				duration: "Apr 2020 - Sep 2020",
				details: [
					"Manufactured test fixtures and created work instructions to test 1200 ventilator systems as required due to COVID-19.",
					"Assembled fixtures through soldering, comprehending electrical schematics, and optimizing component placements.",
				],
			},
			{
				label: "Machine Shop Assistant",
				company: "CANASTAMPI inc.",
				duration: "Jun 2019 - Aug 2019",
				details: [
					"Operated machines including a CNC Mill, Lathe, Drill Press, and Pantograph to engrave, polish, and manufacture parts.",
					"Validated and verified designed parts precisely met drawing specifications.",
				],
			},
		],
	},
];
