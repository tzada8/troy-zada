import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function TroyZada() {
	return (
		<div>
			<Subheading label="About the Application" />
			<Paragraph content="Every person has different previous experiences that defines their story. Thus, this website explains my story. Ranging from basic contact information to education, work experiences, and projects I’ve completed, everything here shapes Troy Zada." />
			<GroupedList header="Users can view information about me in one of following categories:" bullets={[
				{label: "Home", content: "Basic information as well as social media links"},
				{label: "Education", content: "Universities I attended and awards I achieved"},
				{label: "Experience", content: "Previous history of companies I worked at"},
				{label: "Skills", content: "Proficiency in interpersonal and professional skills"},
				{label: "Portfolio", content: "Projects I am working on or have completed"},
				{label: "Blog", content: "Stories shared about past experiences"},
				{label: "Contact", content: "A way to reach out and leave me a message"},
			]}/>

			<Subheading label="Tech Stack" />
			<GroupedList header="Frontend" bullets={[
				{label: "React", content: "UI framework"},
				{label: "JavaScript", content: "Frontend language"},
				{label: "HTML", content: "Website markup structure"},
				{label: "CSS", content: "Component styling"},
				{label: "React Icons", content: "Predesigned icons"},
				{label: "Google Fonts", content: "Custom font styles"},
			]}/>

			<GroupedList header="Deployment" bullets={[
				{label: "Netlify", content: "Frontend deployment"},
			]}/>

			<Subheading label="Technical Functionality" />
			<Paragraph content="Each page of the website is a composition of various components, where components are reusable pieces of code responsible for a single principle. Each page then specifies which components should be rendered to the screen, along with the corresponding CSS styles being applied." />
			<Paragraph last content="For instance, this information is currently being displayed on a Card component, along with a Navbar component being responsible for providing the routes. As the user selects a different route (e.g., Experience page), different components are rendered instead such as a WorkInfo component responsible for displaying the individual boxes of my work experience. As various paths are selected, the rendered components update accordingly to ensure the correct information is always being displayed." />
		</div>
	);
}
