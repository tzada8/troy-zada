import React from "react";
import emailjs from "emailjs-com";

import Subtitle from "../../components/subtitle/Subtitle";
import "./Contact.css";

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();
		showThankYouMessage(); // SHOW THANK YOU MESSAGE FOR 3 SECONDS

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

	function showThankYouMessage() {
		const message = document.getElementById("thank-you-container");
		message.style.visibility = "visible"; // SHOW MESSAGE
		setTimeout(function () {
			message.style.visibility = "hidden"; // AFTER 3s HIDE MESSAGE
		}, 3000);
	}

	return (
		<div>
			<Subtitle icon="fas fa-inbox" label="Send Me a Message" />
			<div className="contact-me-container">
				<form id="contact-form" onSubmit={sendEmail}>
					<h4 className="form-field-headers">Name:</h4>
					<input
						name="name"
						type="text"
						className="form-control"
						placeholder="Your name..."
						required
					/>
					<br />
					<h4 className="form-field-headers">Email:</h4>
					<input
						name="email"
						type="email"
						className="form-control"
						placeholder="Your email..."
						required
					/>
					<br />
					<h4 className="form-field-headers">Subject:</h4>
					<input
						name="subject"
						type="text"
						className="form-control"
						placeholder="Your subject..."
						required
					/>
					<br />
					<h4 className="form-field-headers">Message:</h4>
					<textarea
						name="message"
						type="text"
						className="form-control message"
						placeholder="Your message..."
						rows="4"
						required
					></textarea>
					<br />
					<input
						id="submit-button"
						type="submit"
						className="submit"
						value="SEND MESSAGE"
					/>
				</form>

				<div id={"thank-you-container"}>
					<i className="far fa-check-circle checkmark-icon" />
					<h2 className="thank-you-word">Thank you!</h2>
					<h4 className="thank-you-message">
						Your message has been sent.
					</h4>
				</div>
			</div>
		</div>
	);
}
