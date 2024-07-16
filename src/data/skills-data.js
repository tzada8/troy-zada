import React from "react";
import { FaGears, FaUserGroup } from "react-icons/fa6";

export const skillsData = [
	{
		label: "Technical Skills",
		icon: <FaGears />,
		data: [
			// 30
			{ text: "Python", value: 100, category: "highest" },
			{ text: "JavaScript", value: 81, category: "highest" },
			{ text: "SQL", value: 90, category: "highest" },

			{ text: "HTML", value: 70, category: "high" },
			{ text: "Java", value: 75, category: "high" },
			{ text: "ML", value: 75, category: "high" },
			{ text: "ReactJS", value: 80, category: "high" },
			{ text: "Rails", value: 65, category: "high" },
			{ text: "SEO", value: 61, category: "high" },

			{ text: "Airflow", value: 52, category: "medium" },
			{ text: "AWS", value: 48, category: "medium" },
			{ text: "CSS", value: 57, category: "medium" },
			{ text: "DBT", value: 55, category: "medium" },
			{ text: "Flask", value: 43, category: "medium" },
			{ text: "NodeJS", value: 60, category: "medium" },
			{ text: "Ruby", value: 41, category: "medium" },
			{ text: "Snowflake", value: 45, category: "medium" },

			{ text: "Docker", value: 40, category: "low" },
			{ text: "Fivetran", value: 0, category: "low" },
			{ text: "NumPy", value: 30, category: "low" },
			{ text: "Pandas", value: 36, category: "low" },
			{ text: "PyTorch", value: 28, category: "low" },
			{ text: "R", value: 21, category: "low" },

			{ text: "CI/CD", value: 5, category: "lowest" },
			{ text: "Excel VBA", value: 0, category: "lowest" },
			{ text: "Git", value: 15, category: "lowest" },
			{ text: "GCP", value: 18, category: "lowest" },
			{ text: "PostgreSQL", value: 20, category: "lowest" },
			{ text: "VueJS", value: 5, category: "lowest" },
			{ text: "Unix", value: 10, category: "lowest" },
		],
	},
	{
		label: "Interpersonal Skills",
		icon: <FaUserGroup />,
		data: [
			// 25
			{ text: "Detail-oriented", value: 81, category: "highest" },
			{ text: "Learning Agility", value: 100, category: "highest" },
			{ text: "Teaching", value: 90, category: "highest" },

			{ text: "Adaptability", value: 65, category: "high" },
			{ text: "Hardworking", value: 80, category: "high" },
			{ text: "Organization", value: 70, category: "high" },
			{ text: "Self-motivated", value: 70, category: "high" },
			{ text: "Time Management", value: 75, category: "high" },

			{ text: "Collaboration", value: 41, category: "medium" },
			{ text: "Commitment", value: 57, category: "medium" },
			{ text: "Communication", value: 60, category: "medium" },
			{ text: "Independent", value: 50, category: "medium" },
			{ text: "Problem-solving", value: 55, category: "medium" },
			{ text: "Punctuality", value: 60, category: "medium" },
			{ text: "Teamwork", value: 45, category: "medium" },

			{ text: "Critical Thinking", value: 40, category: "low" },
			{ text: "Innovative", value: 35, category: "low" },
			{ text: "Leadership", value: 30, category: "low" },
			{ text: "Prioritization", value: 25, category: "low" },
			{ text: "Responsibility", value: 40, category: "low" },

			{ text: "Creativity", value: 0, category: "lowest" },
			{ text: "Cross-functional", value: 5, category: "lowest" },
			{ text: "Decision-making", value: 20, category: "lowest" },
			{ text: "Patient", value: 17, category: "lowest" },
			{ text: "Public Speaking", value: 15, category: "lowest" },
		],
	},
];
