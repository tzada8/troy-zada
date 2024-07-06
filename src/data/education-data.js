import { FaAward } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

export const educationData = [
	{
		label: "Education",
		icon: <IoSchool />,
		data: [
			{
				label: "Management Engineering",
				company: "University of Waterloo",
				duration: "Sept 2019 - June 2024",
				details: [
					"Bachelor of Applied Science candidate developing expertise in data analytics, information systems, operations management, and organizational behaviour.",
					"Some important courses to highlight include: Algorithms and Data Structures (Java), Databases and Software Design (SQL), Statistics (R), Optimization, and Organizational Behaviour.",
				],
			},
		],
	},
	{
		label: "Awards",
		icon: <FaAward />,
		data: [
			{
				label: "Gonzaga Leadership Award",
				duration: "June 2019",
				details: [
					"Awarded out of 500 students for being an effective, responsible, and confident problem solver within the school community.",
				],
			},
			{
				label: "Michael Kim Award",
				duration: "June 2019",
				details: [
					"Awarded out of 400 student-athletes for outstanding contributions and commitment to the athletic community.",
				],
			},
			{
				label: "Knights of Colombus - St. Faustina Award",
				duration: "June 2019",
				details: [
					"Awarded out of 500 students for consistently demonstrating an exemplary ethical attitude towards fellow students.",
				],
			},
		],
	},
];
