import React from "react";

import { FULL_NAME } from "../data/constants";
import { blogData } from "../data/blog-data";
import { portfolioData } from "../data/portfolio-data";
import { rootRoutes } from "./root-routes";

import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Education from "../pages/education/Education";
import Experience from "../pages/experience/Experience";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import Portfolio from "../pages/portfolio/Portfolio";
import Skills from "../pages/skills/Skills";

export const home = {
	...rootRoutes.home,
	label: FULL_NAME,
	sublabel: "PhD Student at University of Waterloo",
	description:
		"Passionate engineering graduate committed to learning and teaching, with a keen focus on researching human-centric evaluation of recomendation systems.",
};

export const pageNotFound = {
	label: "PAGE NOT FOUND",
	path: "*",
	element: <PageNotFound />,
	quote: "Understanding a question is half the answer",
	author: "Socrates",
};

export const routes = [
	{
		...rootRoutes.education,
		element: <Education />,
		quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
		author: "M.K. Gandhi",
	},
	{
		...rootRoutes.experience,
		element: <Experience />,
		quote: "The only source of knowledge is experience",
		author: "Albert Einstein",
	},
	{
		...rootRoutes.skills,
		element: <Skills />,
		quote: "Tell me and I forget, teach me and I may remember, involve me and I learn",
		author: "Benjamin Franklin",
	},
	{
		...rootRoutes.portfolio,
		element: <Portfolio />,
		quote: "As practice makes perfect, I cannot but make progress; each drawing one makes, each study one paints, is a step forward",
		author: "Vincent Van Gogh",
		subroutes: portfolioData,
	},
	{
		...rootRoutes.blog,
		element: <Blog />,
		quote: "The reading of all good books is like a conversation with the finest minds of past centuries",
		author: "Rene Descartes",
		subroutes: blogData,
	},
	{
		...rootRoutes.contact,
		element: <Contact />,
		quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience",
		author: "Eleanor Roosevelt",
	},
];

export const portfolio = routes.findIndex((route) => route.path === rootRoutes.portfolio.path);
export const blog = routes.findIndex((route) => route.path === rootRoutes.blog.path);
export const contact = routes.findIndex((route) => route.path === rootRoutes.contact.path);
