import React from "react";
import CodingProjectPost from "../../../components/cards/content/portfolio/project-post/CodingProjectPost";
import { portfolioData } from "../PortfolioData";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";
import TypeOfTech from "../../components/TypeOfTech";
import TechListItem from "../../components/TechListItem";

function TroyZada() {
	const troyZadaWebsite = portfolioData.coding.troyZadaWebsite;
	return (
		<div>
			<CodingProjectPost
				label={troyZadaWebsite.label}
				src={troyZadaWebsite.image}
				date={troyZadaWebsite.date}
				github={troyZadaWebsite.github}
				youtube={troyZadaWebsite.youtube}
			/>

			<Subheading subheading="About the Application" />
			<Paragraph content="Every individual has their own story to tell, and thus, this application explains my story. Ranging from basic contact information to my past experiences, to skills I possess, to projects I’ve worked on, and lastly, to some shared blog posts. All this explains who Troy Zada is." />
			<Paragraph content="With this Troy Zada Website, users can view information about me in one of six categories, being Home, Experience, Skills, Portfolio, Blog, and Contact. " />
			<ul>
				<TechListItem
					language="Home"
					description="Basic information as well as social media links"
				/>
				<TechListItem
					language="Experience"
					description="Education, work experiences, and awards"
				/>
				<TechListItem
					language="Skills"
					description="Percentages for numerous interpersonal and professional skills"
				/>
				<TechListItem
					language="Portfolio"
					description="List of coding projects and communication projects worked on and completed"
				/>
				<TechListItem
					language="Blog"
					description="Stories shared about past experiences"
				/>
				<TechListItem
					language="Contact"
					description="A way to reach out and leave me a message"
				/>
			</ul>
			<br />

			<Subheading subheading="Tech Stack" />
			<TypeOfTech type="Frontend" />
			<ul>
				<TechListItem
					language="React"
					description="UI framework of the application"
				/>
				<TechListItem
					language="JavaScript"
					description="Frontend language of the application"
				/>
				<TechListItem
					language="HTML"
					description="Markup design of webpage"
				/>
				<TechListItem
					language="CSS"
					description="Styles for elements and components"
				/>
			</ul>
			<br />

			<Subheading subheading="Application's Functionality" />
			<Paragraph content="Each part of the webpage is a unique component, where each component consists of its own set of elements (elements being basic HTML tags such as <div></div>). The components are then rendered to the screen, and the corresponding CSS styles are applied. " />
			<Paragraph content="The webpage displays a corresponding card depending on what URL the user is currently at. For example, if the URL has “/experience” in it, then the Experience page will be displayed. Similarly, if the URL contains “/portfolio/troy-zada”, then the specific “troy-zada” card from the Portfolio section will be displayed. Home is always rendered." />
		</div>
	);
}

export default TroyZada;
