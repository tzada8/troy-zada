import { rootRoutes } from "../routes/root-routes";

// Images
import creatingThisWebsiteImage from "../images/blog/creating-this-website.webp";
import firstWorkTermImage from "../images/blog/first-work-term.webp";
import universityLifeLessonsImage from "../images/blog/university-life-lessons.webp";

// Components
import CreatingThisWebsite from "../pages/blog/posts/CreatingThisWebsite";
import FirstWorkTerm from "../pages/blog/posts/FirstWorkTerm";
import UniversityLifeLessons from "../pages/blog/posts/UniversityLifeLessons";

export const blogData = [
    {
        label: "10 Major University Life Lessons",
        path: `${rootRoutes.blog.path}/university-life-lessons`,
		element: <UniversityLifeLessons />,
		image: universityLifeLessonsImage,
		date: "July 1, 2024",
    },
    {
        label: "First Co-op Work Term",
        path: `${rootRoutes.blog.path}/first-work-term`,
		element: <FirstWorkTerm />,
		image: firstWorkTermImage,
		date: "June 1, 2024",
    },
    {
        label: "How I Created This Website",
        path: `${rootRoutes.blog.path}/creating-this-website`,
		element: <CreatingThisWebsite />,
		image: creatingThisWebsiteImage,
		date: "March 27, 2021", // TODO: Update.
    },
]
