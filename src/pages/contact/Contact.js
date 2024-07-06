import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { HiQuestionMarkCircle } from "react-icons/hi";
import emailjs from "emailjs-com";

import Icon from "../../components/icon/Icon";
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
			<Subtitle icon={<HiQuestionMarkCircle />} label="Send Me a Message" />
			<div className="contact-me-container">
				<form id="contact-form" onSubmit={sendEmail}>
					<h4 className="form-field-headers">NAME</h4>
					<input
						name="name"
						type="text"
						className="form-control"
						placeholder="Your name..."
						required
					/>
					<br />
					<h4 className="form-field-headers">EMAIL</h4>
					<input
						name="email"
						type="email"
						className="form-control"
						placeholder="Your email..."
						required
					/>
					<br />
					<h4 className="form-field-headers">SUBJECT</h4>
					<input
						name="subject"
						type="text"
						className="form-control"
						placeholder="Your subject..."
						required
					/>
					<br />
					<h4 className="form-field-headers">MESSAGE</h4>
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
						className="button-font bold submit"
						value="SEND MESSAGE"
					/>
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
