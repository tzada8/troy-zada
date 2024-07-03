import { blogRoutes } from "./blog-routes";
import { portfolioRoutes } from "./portfolio-routes";
import { rootRoutes } from "./root-routes";

// Components
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Experience from "../pages/experience/Experience";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import Portfolio from "../pages/portfolio/Portfolio";
import Skills from "../pages/skills/Skills";

export const pageNotFound = {
    label: "PAGE NOT FOUND",
	element: <PageNotFound />,
	quote: "Understanding a question is half the answer",
	author: "Socrates",
}

export const routes = [
    {
        ...rootRoutes.home,
        element: <Home />,
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
        subroutes: portfolioRoutes,
    },
    {
        ...rootRoutes.blog,
        element: <Blog />,
		quote: "The reading of all good books is like a conversation with the finest minds of past centuries",
		author: "Rene Descartes",
        subroutes: blogRoutes,
    },
    {
        ...rootRoutes.contact,
        element: <Contact />,
		quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience",
		author: "Eleanor Roosevelt",
    },
]

export const home = routes.findIndex(route => route.path === rootRoutes.home.path);
export const portfolio = routes.findIndex(route => route.path === rootRoutes.portfolio.path);
export const blog = routes.findIndex(route => route.path === rootRoutes.blog.path);
export const contact = routes.findIndex(route => route.path === rootRoutes.contact.path);
