import React from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa6";

export const educationData = [
	{
		label: "Education",
		icon: <FaGraduationCap />,
		data: [
			{
				label: "Management Sciences & Engineering, PhD",
				company: "University of Waterloo",
				duration: "Sep 2024 - Present",
				details: [
					"Research interests oriented towards search engines and recommendation systems.",
				],
			},
			{
				label: "Management Engineering, BASc",
				company: "University of Waterloo",
				duration: "Sep 2019 - Jun 2024",
				details: [
					"Expertise in data analytics, information systems, and operations management.",
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
				duration: "Apr 2023, Dec 2023",
				details: [
					"Awarded twice consecutively for outstanding performance and delivering significant impact.",
				],
			},
			{
				label: "Gonzaga Leadership Award",
				duration: "Jun 2019",
				details: [
					"Awarded for being an effective, responsible, and confident problem solver within the community.",
				],
			},
			{
				label: "Michael Kim Award",
				duration: "Jun 2019",
				details: [
					"Awarded for outstanding contributions and commitment to the athletic school community.",
				],
			},
			{
				label: "Knights of Colombus - St. Faustina Award",
				duration: "Jun 2019",
				details: [
					"Awarded for demonstrating an exemplary ethical attitude towards fellow students.",
				],
			},
		],
	},
];
