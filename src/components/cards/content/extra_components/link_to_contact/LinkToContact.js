import React from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../../../../../data/NavbarData";
import "./LinkToContact.css";

function LinkToContact() {
	return (
		<Link className="link-to-contact" to={navbarData.contact.path}>
			<i className="fas fa-file-download" />
			GET IN TOUCH
		</Link>
	);
}

export default LinkToContact;
