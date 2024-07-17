import React from "react";
import { FaDatabase, FaDesktop, FaGears, FaLanguage, FaServer } from "react-icons/fa6";

export const skillsData = [
	{
		label: "Languages",
		icon: <FaLanguage />,
		data: [
			{ label: "Python", image: require("../images/skills/python.webp") },
			{ label: "JavaScript", image: require("../images/skills/javascript.webp") },
			{ label: "SQL", image: require("../images/skills/sql.webp") },
			{ label: "Java", image: require("../images/skills/java.webp") },
			{ label: "Ruby", image: require("../images/skills/ruby.webp") },
			{ label: "R", image: require("../images/skills/r.webp") },
		],
	},
	{
		label: "Frontend",
		icon: <FaDesktop />,
		data: [
			{ label: "React", image: require("../images/skills/react.webp") },
			{ label: "HTML", image: require("../images/skills/html.webp") },
			{ label: "CSS", image: require("../images/skills/css.webp") },
			{ label: "Vue", image: require("../images/skills/vue.webp") },
		],
	},
	{
		label: "Backend",
		icon: <FaServer />,
		data: [
			{ label: "Node", image: require("../images/skills/node.webp") },
			{ label: "Rails", image: require("../images/skills/rails.webp") },
			{ label: "Flask", image: require("../images/skills/flask.webp") },
		],
	},
	{
		label: "Data Engineering & Data Science",
		icon: <FaDatabase />,
		data: [
			{ label: "Airflow", image: require("../images/skills/airflow.webp") },
			{ label: "DBT", image: require("../images/skills/dbt.webp") },
			{ label: "Snowflake", image: require("../images/skills/snowflake.webp") },
			{ label: "Pandas", image: require("../images/skills/pandas.webp") },
			{ label: "PyTorch", image: require("../images/skills/pytorch.webp") },
			{ label: "NumPy", image: require("../images/skills/numpy.webp") },
		],
	},
	{
		label: "DevOps",
		icon: <FaGears />,
		data: [
			{ label: "AWS", image: require("../images/skills/aws.webp") },
			{ label: "Docker", image: require("../images/skills/docker.webp") },
			{ label: "GCP", image: require("../images/skills/gcp.webp") },
		],
	},
];
