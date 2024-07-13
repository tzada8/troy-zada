import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function ResumeClassifier() {
	return (
		<div>
			<Subheading label="About the Application" />
			<Paragraph content="People often lack objective methods to evaluate how well their resume aligns with job postings. Thus, an easy way to assess resume compatibility with specific jobs would simplify the resume tailoring process." />
			<Paragraph content="Using a dataset of 4,870 resumes, various analyses were conducted to better understand patterns and make predictions. Naïve Bayes and Decision Trees were employed to generalize the dataset for future predictions, while Association Rule Mining was used to gain insights into the current data." />

			<Subheading label="Tech Stack" />
			<GroupedList header="Backend" bullets={[
				{label: "Jupyter Notebook", content: "Editing and running blocks of code"},
				{label: "Python", content: "Backend language"},
			]}/>

			<GroupedList header="Supervised/Unsupervised Learning" bullets={[
				{label: "Naïve Bayes", content: "Predicts the probability of receiving an interview"},
				{label: "Decision Trees", content: "Predicts whether a resume would receive an interview"},
				{label: "Association Rule Mining", content: "Identifies patterns between attributes"},
			]}/>

			<Subheading label="Technical Functionality" />
			<Paragraph content="The initial dataset was analyzed to gain a deeper understanding of its contents. Subsequently, data cleansing involved removing unnecessary attributes and setting default values for fields containing “NA”. The data was then standardized and transformed into a one-hot encoded format." />
			<Paragraph last content="Using the cleaned dataset, both supervised and unsupervised learning techniques were applied to make predictions and uncover patterns. Specifically, certain explanatory variables exhibited greater predictive capability, with decision trees proving particularly effective for this dataset." />
		</div>
	);
}
