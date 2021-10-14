import firstWorkTermImage from "../images/blog/first-work-term.png";
import creatingThisWebsiteImage from "../images/blog/creating-this-website.jpg";

import { routes } from "./Routes";

export const blogData = {
	firstWorkTerm: {
		title: "My First Coop Work Term",
		path: routes.blog.firstWorkTerm.path,
		image: firstWorkTermImage,
		date: "March 26, 2021",
	},
	creatingThisWebsite: {
		title: "How I Created This Website",
		path: routes.blog.creatingThisWebsite.path,
		image: creatingThisWebsiteImage,
		date: "March 27, 2021",
	},
};
