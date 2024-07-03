import React from "react";

import Paragraph from "../../../data/components/Paragraph";
import Subheading from "../../../data/components/Subheading";
import TechListItem from "../../../data/components/TechListItem";
import TypeOfTech from "../../../data/components/TypeOfTech";

export default function Moodivity() {
	return (
		<div>
			{/* TODO: Can add tagline (briefDescription) here. Think of the Juxtapose README. */}

			<Subheading subheading="About the Application" />
			<Paragraph content="Everybody struggles with the stresses of everyday life, and for the most part, mental health is sacrificed for productivity. This quickly leads individuals down a vicious cycle of being unproductive and overwhelmed because of their deteriorating mental health and wellbeing." />
			<Paragraph content="With Moodivity, users can create a profile, set daily goals for themselves, and have access to different activities linked to the work they will be doing. They can then start their daily work, and time themselves as they do so. Once they are finished for the day, they are prompted to record an audio log to reflect on the work completed throughout the day." />
			<Paragraph content="These logs are then transcribed and analyzed using powerful Machine Learning models and saved to the database so that users can reflect on days they did better or worse, and how their sentiment reflected that." />

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
					language="Redux"
					description="Library used for React state management"
				/>
				<TechListItem
					language="Redux-Sagas"
					description="Library used for asynchronous requests and
                  complex state management"
				/>
			</ul>
			<br />

			<TypeOfTech type="Backend" />
			<ul>
				<TechListItem
					language="Django"
					description="Backend framework of the application"
				/>
				<TechListItem
					language="Python"
					description="Backend language of the application"
				/>
				<TechListItem
					language="Django Rest Framework"
					description="Built-in library to connect
                  backend to frontend"
				/>
				<TechListItem
					language="Google Cloud API"
					description="Speech to Text API for audio transcription, NLP Sentiment Analysis for mood analysis of
                        transcription, and Google Cloud Storage to store audio files recorded by
                        users"
				/>
			</ul>
			<br />

			<TypeOfTech type="Database" />
			<ul>
				<TechListItem
					language="PostgreSQL"
					description="Used for data storage of users, logs,
                  profiles, etc."
				/>
			</ul>
			<br />

			<Subheading subheading="Application's Functionality" />
			<Paragraph content="A user will record an audio log that is posted to the Django Server through a connected REST API. The posted audio file will then be stored in the Google Cloud Storage for secure storage, read from this storage and then converted to text using Google's Speech to Text API, and afterwards is analyzed using Google's NLP sentiment analysis API." />
			<Paragraph content="Once the log is analyzed, the logs are displayed on the user’s dashboard, allowing them to reflect on their sentiment, and how it relates to their originally set goal." />
		</div>
	);
}
