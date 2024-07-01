// Components
import Home from "../pages/home/Home";
import Skills from "../pages/skills/Skills";
import Experience from "../pages/experience/Experience";
import Portfolio from "../pages/portfolio/Portfolio";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import PageNotFound from "../pages/page-not-found/PageNotFound";

import { routes } from "./Routes";

export const pageNotFound = {
	label: "PAGE NOT FOUND",
	component: <PageNotFound />,
	quotation: "Understanding a question is half the answer",
	author: "Socrates",
};

export const navbarData = {
	home: {
		label: "HOME",
		path: routes.home.path,
		component: <Home />,
	},
	experience: {
		label: "EXPERIENCE",
		path: routes.experience.path,
		component: <Experience />,
		quotation: "The only source of knowledge is experience",
		author: "Albert Einstein",
	},
	skills: {
		label: "SKILLS",
		path: routes.skills.path,
		component: <Skills />,
		quotation:
			"Tell me and I forget, teach me and I may remember, involve me and I learn",
		author: "Benjamin Franklin",
	},
	portfolio: {
		label: "PORTFOLIO",
		path: routes.portfolio.path,
		component: <Portfolio />,
		quotation:
			"As practice makes perfect, I cannot but make progress; each drawing one makes, each study one paints, is a step forward",
		author: "Vincent Van Gogh",
	},
	blog: {
		label: "BLOG",
		path: routes.blog.path,
		component: <Blog />,
		quotation:
			"The reading of all good books is like a conversation with the finest minds of past centuries",
		author: "Rene Descartes",
	},
	contact: {
		label: "CONTACT",
		path: routes.contact.path,
		component: <Contact />,
		quotation:
			"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience",
		author: "Eleanor Roosevelt",
	},
};
