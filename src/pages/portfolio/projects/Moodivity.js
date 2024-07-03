import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function Moodivity() {
	return (
		<div>
			{/* TODO: Can add tagline (briefDescription) here. Think of the Juxtapose README. */}

			<Subheading label="About the Application" />
			<Paragraph content="Everybody struggles with the stresses of everyday life, and for the most part, mental health is sacrificed for productivity. This quickly leads individuals down a vicious cycle of being unproductive and overwhelmed because of their deteriorating mental health and wellbeing." />
			<Paragraph content="With Moodivity, users can create a profile, set daily goals for themselves, and have access to different activities linked to the work they will be doing. They can then start their daily work, and time themselves as they do so. Once they are finished for the day, they are prompted to record an audio log to reflect on the work completed throughout the day." />
			<Paragraph content="These logs are then transcribed and analyzed using powerful Machine Learning models and saved to the database so that users can reflect on days they did better or worse, and how their sentiment reflected that." />

			<Subheading label="Tech Stack" />
			<GroupedList header="Frontend" bullets={[
				{label: "React", content: "UI framework of the application"},
				{label: "JavaScript", content: "Frontend language of the application"},
				{label: "Redux", content: "Library used for React state management"},
				{label: "Redux-Sagas", content: "Library used for asynchronous requests and complex state management"},
			]}/>

			<GroupedList header="Backend" bullets={[
				{label: "Django", content: "Backend framework of the application"},
				{label: "Python", content: "Backend language of the application"},
				{label: "Django Rest Framework", content: "Built-in library to connect backend to frontend"},
				{label: "Google Cloud API", content: "Speech to Text API for audio transcription, NLP Sentiment Analysis for mood analysis of transcription, and Google Cloud Storage to store audio files recorded by users"},
			]}/>

			<GroupedList header="Database" bullets={[
				{label: "PostgreSQL", content: "Used for data storage of users, logs, profiles, etc."},
			]}/>

			<Subheading label="Application's Functionality" />
			<Paragraph content="A user will record an audio log that is posted to the Django Server through a connected REST API. The posted audio file will then be stored in the Google Cloud Storage for secure storage, read from this storage and then converted to text using Google's Speech to Text API, and afterwards is analyzed using Google's NLP sentiment analysis API." />
			<Paragraph content="Once the log is analyzed, the logs are displayed on the user’s dashboard, allowing them to reflect on their sentiment, and how it relates to their originally set goal." />
		</div>
	);
}
