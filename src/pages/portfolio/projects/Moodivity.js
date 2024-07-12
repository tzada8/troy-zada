import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function Moodivity() {
	return (
		<div>
			<Subheading first label="About the Application" />
			<Paragraph content="Many face the daily stresses in life, often sacrificing their mental health for productivity. This quickly leads individuals down a vicious cycle of being unproductive and overwhelmed due to their deteriorating mental health and wellbeing." />
			<Paragraph content="With Moodivity, users can create profiles and set daily goals. They can access activities linked to the work they are completing, including tracking their daily work and reflecting on their productivity by recording daily audio logs." />
			<Paragraph content="These logs are transcribed and analyzed using advanced Machine Learning models, storing insights in the database. This allows users to review their performance and emotional states over time, providing guidance on how they can improve." />

			<Subheading label="Tech Stack" />
			<GroupedList header="Frontend" bullets={[
				{label: "React", content: "UI framework"},
				{label: "JavaScript", content: "Frontend language"},
				{label: "Redux", content: "Library used for React state management"},
				{label: "Redux-Sagas", content: "Library used for asynchronous requests and complex state management"},
			]}/>

			<GroupedList header="Backend" bullets={[
				{label: "Django", content: "Backend framework"},
				{label: "Python", content: "Backend language"},
				{label: "Django Rest Framework", content: "Built-in library to connect backend to frontend"},
				{label: "Google Cloud API", content: "Speech to Text API for audio transcription, NLP Sentiment Analysis for mood analysis of transcription, and Google Cloud Storage to store audio files"},
			]}/>

			<GroupedList header="Database" bullets={[
				{label: "PostgreSQL", content: "Used for data storage of users, logs, profiles, etc."},
			]}/>

			<Subheading label="Technical Functionality" />
			<Paragraph content="A user records an audio log, which is posted to the Django server via a connected REST API. The audio file is securely stored in Google Cloud Storage, then read and converted to text using Google's Speech-to-Text API. Subsequently, the file is analyzed using Google's NLP sentiment analysis API." />
			<Paragraph last content="After analysis, the logs are displayed on the user’s dashboard, enabling them to reflect on their sentiment and its relation to their initial goal." />
		</div>
	);
}
