import { rootRoutes } from "../routes/root-routes";

// Images
import creatingThisWebsiteImage from "../images/blog/creating-this-website.webp";
import firstWorkTermImage from "../images/blog/first-work-term.webp";

// Components
import CreatingThisWebsite from "../pages/blog/posts/CreatingThisWebsite";
import FirstWorkTerm from "../pages/blog/posts/FirstWorkTerm";

export const blogData = [
    {
        label: "My First Co-op Work Term",
        path: `${rootRoutes.blog.path}/first-work-term`,
		element: <FirstWorkTerm />,
		image: firstWorkTermImage,
		date: "July 1, 2024",
    },
    {
        label: "How I Created This Website",
        path: `${rootRoutes.blog.path}/creating-this-website`,
		element: <CreatingThisWebsite />,
		image: creatingThisWebsiteImage,
		date: "March 27, 2021", // TODO: Update.
    },
]
