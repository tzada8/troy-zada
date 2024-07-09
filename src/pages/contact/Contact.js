import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { HiQuestionMarkCircle } from "react-icons/hi";
import emailjs from "emailjs-com";

import FormButton from "../../components/button/FormButton";
import Icon from "../../components/icon/Icon";
import Subtitle from "../../components/subtitle/Subtitle";
import "./Contact.css";

export default function Contact() {
	const formFields = [
		{name: "name", type: "text", htmlTag: "input"},
		{name: "email", type: "email", htmlTag: "input"},
		{name: "subject", type: "text", htmlTag: "input"},
		{name: "message", type: "text", htmlTag: "textarea"},
	];

	const sendEmail = (e) => {
		e.preventDefault();
		// TODO: Move this to "result" (success) part of email.
		// TODO: Create "fail" popup message in case message did not go through.
		showThankYouMessage();

		// TODO: Verify this works (or change to new way for emailing functionality).
		emailjs
			.sendForm(
				"service_gmail",
				"template_contact_form",
				e.target,
				"user_2i1vEGhwrmIRYHtiWXPEf"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	const showThankYouMessage = () => {
		const message = document.getElementById("thank-you-container");
		message.style.visibility = "visible";
		setTimeout(() => {message.style.visibility = "hidden"}, 5000);
	}

	return (
		<div>
			<Subtitle icon={<HiQuestionMarkCircle />} label="Send Me a Message" />
			<div className="contact-form-container">
				<form onSubmit={sendEmail}>
					{formFields.map(f => (
						<div key={f.name}>
							<h4>{f.name.toUpperCase()}</h4>
							{React.createElement(f.htmlTag, {
								name: f.name,
								type: f.type,
								className: `form-control ${f.htmlTag}-element`,
								placeholder: `Your ${f.name}...`,
								required: true,
							})}
						</div>
					))}
					<FormButton className="form-submit-sizing" label="SEND MESSAGE" />
				</form>

				<div id="thank-you-container" className="center">
					<Icon image={<FaCircleCheck />} green />
					<h3>Thank you!</h3>
					<p>Your message has been sent.</p>
				</div>
			</div>
		</div>
	);
}
