import { FaAward } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

export const educationData = [
	{
		label: "Education",
		icon: <IoSchool />,
		data: [
			{
				label: "Management Sciences, PhD",
				company: "University of Waterloo",
				duration: "Sept. 2024 - Present",
				details: [
					"Research interests oriented towards search engines and recommendation systems.",
				],
			},
			{
				label: "Management Engineering, BASc",
				company: "University of Waterloo",
				duration: "Sept. 2019 - June 2024",
				details: [
					"Expertise in data analytics, information systems, and operations management.",
					"Relevant courses: Machine Learning, Search Engines, Software Engineering, and Optimization.",
					"Undergraduate Research Assistant researching the effectiveness of LLMs in answering medical questions.",
				],
			},
		],
	},
	{
		label: "Awards",
		icon: <FaAward />,
		data: [
			{
				label: "Super.com Transformative Impact",
				duration: "Apr. 2023, Dec. 2023",
				details: [
					"Awarded twice consecutively among 60 interns for outstanding performance and delivering significant impact.",
				],
			},
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
