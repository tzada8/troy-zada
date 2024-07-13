import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function Juxtapose() {
	return (
		<div>
			<Subheading first label="About the Application" />
			<Paragraph content="Juxtapose is a web application designed to help online shoppers tackle the difficulty of making well-informed and confident purchasing decisions by alleviating decision paralysis and information overload." />
			<Paragraph content="By aggregating specifications, peer reviews, expert reviews, and related videos, and providing tailored recommendations, shoppers can reach purchasing decisions with ease." />
			<GroupedList header="To use Juxtapose, users can:" bullets={[
				{label: "Search", content: "Search for product category (e.g., DSLR cameras)"},
				{label: "Set Filters & Preferences", content: "Set filters and rank features based on personal preferences"},
				{label: "View Recommendations", content: "See the products recommended to them"},
				{label: "Compare", content: "Compare products and pick their favourite one"},
			]}/>

			<Subheading label="Tech Stack" />
			<GroupedList header="Frontend" bullets={[
				{label: "React", content: "UI framework"},
				{label: "JavaScript", content: "Frontend language"},
				{label: "Ant Design", content: "Predesigned icons"},
				{label: "Google Fonts", content: "Custom font styles"},
			]}/>

			<GroupedList header="Backend" bullets={[
				{label: "Flask", content: "Backend framework"},
				{label: "Python", content: "Backend language"},
			]}/>

			<GroupedList header="APIs" bullets={[
				{label: "Best Buy API", content: "Scrape product information from Best Buy"},
				{label: "OpenAI", content: "Summarize product reviews"},
				{label: "RapidAPI", content: "Scrape expert reviews from Consumer Reports"},
				{label: "SerpAPI", content: "Scrape products from Google Shopping, product information from Walmart, and related product YouTube videos"},
			]}/>

			<GroupedList header="Deployment" bullets={[
				{label: "Render", content: "Frontend deployment"},
				{label: "Heroku", content: "Backend deployment"},
			]}/>

			<Subheading label="Technical Functionality" />
			<Paragraph content="A user searches for products such as a “DSLR Camera”. From their search, they provide preferences such as their preferred budget, camera type, and quality, and relevant products are pulled from Google Shopping and displayed to the user." />
			<Paragraph content="The user can then select the products they are interested in, and then are prompted to rank their preferences. For instance, one user may consider budget to be the most important, but another user may not want to factor budget into their decision-making process." />
			<Paragraph last content="After the preferences are prioritized, all relevant product information for the selected products is pulled from Best Buy and Walmart. The specifications and peer reviews are pulled directly from Best Buy and Walmart, the expert reviews are pulled from Consumer Reports, and related videos are pulled from YouTube. Users can then compare the products in a side-by-side view to determine which product is most suitable for them." />
		</div>
	);
}
