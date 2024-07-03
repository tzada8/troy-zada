import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function TroyZada() {
	return (
		<div>
			<Subheading label="About the Application" />
			<Paragraph content="Every individual has their own story to tell, and thus, this application explains my story. Ranging from basic contact information to my past experiences, to skills I possess, to projects I’ve worked on, and lastly, to some shared blog posts. All this explains who Troy Zada is." />
			<Paragraph content="With this Troy Zada Website, users can view information about me in one of six categories, being Home, Experience, Skills, Portfolio, Blog, and Contact. " />
			<GroupedList bullets={[
				{label: "Home", content: "Basic information as well as social media links"},
				{label: "Experience", content: "Education, work experiences, and awards"},
				{label: "Skills", content: "Proficiency in various interpersonal and professional skills"},
				{label: "Portfolio", content: "List of coding projects and communication projects worked on and completed"},
				{label: "Blog", content: "Stories shared about past experiences"},
				{label: "Contact", content: "A way to reach out and leave me a message"},
			]}/>

			<Subheading label="Tech Stack" />
			<GroupedList header="Frontend" bullets={[
				{label: "React", content: "UI framework of the application"},
				{label: "JavaScript", content: "Frontend language of the application"},
				{label: "HTML", content: "Markup design of webpage"},
				{label: "CSS", content: "Styles for elements and components"},
			]}/>

			<Subheading label="Application's Functionality" />
			<Paragraph content="Each part of the webpage is a unique component, where each component consists of its own set of elements (elements being basic HTML tags such as <div></div>). The components are then rendered to the screen, and the corresponding CSS styles are applied. " />
			<Paragraph content="The webpage displays a corresponding card depending on what URL the user is currently at. For example, if the URL has “/experience” in it, then the Experience page will be displayed. Similarly, if the URL contains “/portfolio/troy-zada”, then the specific “troy-zada” card from the Portfolio section will be displayed. Home is always rendered." />
		</div>
	);
}
