import React, { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";

import { EMAIL } from "../../data/constants";

import FormButton from "../../components/button/FormButton";
import Popup from "../../components/popup/Popup";
import Subtitle from "../../components/subtitle/Subtitle";
import "./Contact.css";

export default function Contact() {
	const formFields = [
		{ name: "name", type: "text", htmlTag: "input" },
		{ name: "email", type: "email", htmlTag: "input" },
		{ name: "subject", type: "text", htmlTag: "input" },
		{ name: "message", type: "text", htmlTag: "textarea" },
	];

	const successMessage = {
		type: "success",
		label: "Thank you!",
		text: "Your message has been sent.",
	};
	const failureMessage = {
		type: "failure",
		label: "Uh oh!",
		text: `An error seems to have occurred. Please try again or email ${EMAIL} directly.`,
	};
	// If temporarily need to stop contact form, can use this.
	// const constructionMessage = {
	// 	type: "construction",
	// 	label: "Coming soon!",
	// 	text: `For now feel free to send an email to ${EMAIL}.`,
	// };

	const defaultFormState = formFields.reduce((acc, f) => {
		acc[f.name] = "";
		return acc;
	}, {});
	const [formState, setFormState] = useState(defaultFormState);

	const defaultSubmitMessage = {};
	const [submitMessage, setSubmitMessage] = useState({ defaultSubmitMessage });

	const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { ...formState, "form-name": "contact-form" };
		data["subject"] = `${data["name"]} - ${data["subject"]}`;
		const params = new URLSearchParams(data);

		try {
			await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: params.toString(),
			});
			showSubmitPopup(successMessage);
		} catch (err) {
			showSubmitPopup(failureMessage);
		}
		setFormState(defaultFormState);
	};

	const showSubmitPopup = (data) => {
		setSubmitMessage(data);
		setTimeout(() => {
			setSubmitMessage(defaultSubmitMessage);
		}, 8000);
	};

	return (
		<div>
			<Subtitle icon={<HiQuestionMarkCircle />} label="Send Me a Message" />
			<div className="contact-form-container">
				<form
					name="contact-form"
					onSubmit={handleSubmit}
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					{formFields.map((f) => (
						<div key={f.name}>
							<h4>{f.name.toUpperCase()}</h4>
							{React.createElement(f.htmlTag, {
								name: f.name,
								type: f.type,
								className: `form-control ${f.htmlTag}-element`,
								placeholder: `Your ${f.name}...`,
								value: formState[f.name],
								onChange: handleChange,
								required: true,
							})}
						</div>
					))}
					<FormButton
						className="form-submit-sizing"
						label="SEND MESSAGE"
						disabled={submitMessage.type}
					/>
				</form>

				<Popup
					label={submitMessage.label}
					text={submitMessage.text}
					status={submitMessage.type}
				/>
			</div>
		</div>
	);
}
