import React from "react";

// MENU CONSTANTS FOR CARD TITLES
import { navbarData, pageNotFound } from "../../../data/NavbarData";
import CreateCards from "./CreateCards";
import Home from "../home/Home";

// DETERMINES WHICH CARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderCards(props) {
	return (
		<div>
			<Home isOnlyComp={props.home} />
			<CreateCards
				isActive={props.experience}
				label={navbarData.experience.label}
				content={navbarData.experience.component}
				quotation={navbarData.experience.quotation}
				author={navbarData.experience.author}
			/>
			<CreateCards
				isActive={props.skills}
				label={navbarData.skills.label}
				content={navbarData.skills.component}
				quotation={navbarData.skills.quotation}
				author={navbarData.skills.author}
			/>
			<CreateCards
				isActive={props.portfolio}
				label={navbarData.portfolio.label}
				content={navbarData.portfolio.component}
				quotation={navbarData.portfolio.quotation}
				author={navbarData.portfolio.author}
			/>
			<CreateCards
				isActive={props.blog}
				label={navbarData.blog.label}
				content={navbarData.blog.component}
				quotation={navbarData.blog.quotation}
				author={navbarData.blog.author}
			/>
			<CreateCards
				isActive={props.contact}
				label={navbarData.contact.label}
				content={navbarData.contact.component}
				quotation={navbarData.contact.quotation}
				author={navbarData.contact.author}
			/>
			<CreateCards
				isActive={props.pageNotFound}
				label={pageNotFound.label}
				content={pageNotFound.component}
				quotation={pageNotFound.quotation}
				author={pageNotFound.author}
			/>
		</div>
	);
}

export default RenderCards;
