// Images
import firstWorkTermImage from "../../images/blog/first-work-term.png";
import creatingThisWebsiteImage from "../../images/blog/creating-this-website.jpg";

// Components
import FirstWorkTerm from "../../pages/blog/posts/FirstWorkTerm";
import CreatingThisWebsite from "../../pages/blog/posts/CreatingThisWebsite";

import { routes } from "../Routes";

export const blogData = {
	firstWorkTerm: {
		label: "My First Coop Work Term",
		path: routes.blog.firstWorkTerm.path,
		component: <FirstWorkTerm />,
		image: firstWorkTermImage,
		date: "March 26, 2021",
	},
	creatingThisWebsite: {
		label: "How I Created This Website",
		path: routes.blog.creatingThisWebsite.path,
		component: <CreatingThisWebsite />,
		image: creatingThisWebsiteImage,
		date: "March 27, 2021",
	},
};
