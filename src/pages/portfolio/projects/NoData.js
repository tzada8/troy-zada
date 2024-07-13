import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function NoData() {
	return (
		<div>
			<Subheading label="About the Application" />
			<Paragraph content="NoData allows users to search the internet without needing to be connected to data or Wi-Fi. Users can text their search queries to a particular phone number, and the application will text back the results of the query. For instance, out camping and do not have access to data or Wi-Fi, but need to know today’s weather? Text your query “Will it rain today?” to the number, and your question will immediately be answered." />
			<Paragraph content="Users can text the number by specifying flags such as --result or --url to get additional pieces of information. Interested in the URL of the returned results? By providing the --url flag, the URL of the result will be provided to you such that you can view the result’s webpage once you are connected to the Internet again." />

			<Subheading label="Tech Stack" />
			<GroupedList header="Backend" bullets={[
				{label: "NodeJS", content: "Backend framework"},
				{label: "JavaScript", content: "Backend language"},
			]}/>

			<GroupedList header="APIs" bullets={[
				{label: "Twilio", content: "Send and receive text messages"},
				{label: "RapidAPI", content: "Scrape information using the Bing Search API"},
			]}/>

			<GroupedList header="Deployment" bullets={[
				{label: "Docker", content: "Containerizing app to streamline deployments"},
				{label: "Google Cloud", content: "Backend deployment server"},
				{label: "Google Cloud's Secret Manager", content: "Hidden API keys"},
			]}/>

			<Subheading label="Technical Functionality" />
			<Paragraph last content="Users text the NoData phone number, as generated using Twilio, their search queries along with any flags. From these queries, the Bing Search API is used to attain the results. The results are then aggregated and returned to the user for viewing." />
		</div>
	);
}
