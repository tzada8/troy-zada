import React from "react";

// MENU CONSTANTS FOR CARD TITLES
import { navbarCategories, pageNotFound } from "../../../data/Constants";
import CreateCards from "./CreateCards";
import Home from "../home/Home";

// DETERMINES WHICH CARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderCards(props) {
	return (
		<div>
			<Home isOnlyComp={props.home} />
			<CreateCards
				isActive={props.experience}
				title={navbarCategories.experience.label}
				content={navbarCategories.experience.component}
				quotation={navbarCategories.experience.quotation}
				author={navbarCategories.experience.author}
			/>
			<CreateCards
				isActive={props.skills}
				title={navbarCategories.skills.label}
				content={navbarCategories.skills.component}
				quotation={navbarCategories.skills.quotation}
				author={navbarCategories.skills.author}
			/>
			<CreateCards
				isActive={props.portfolio}
				title={navbarCategories.portfolio.label}
				content={navbarCategories.portfolio.component}
				quotation={navbarCategories.portfolio.quotation}
				author={navbarCategories.portfolio.author}
			/>
			<CreateCards
				isActive={props.blog}
				title={navbarCategories.blog.label}
				content={navbarCategories.blog.component}
				quotation={navbarCategories.blog.quotation}
				author={navbarCategories.blog.author}
			/>
			<CreateCards
				isActive={props.contact}
				title={navbarCategories.contact.label}
				content={navbarCategories.contact.component}
				quotation={navbarCategories.contact.quotation}
				author={navbarCategories.contact.author}
			/>
			<CreateCards
				isActive={props.pageNotFound}
				title={pageNotFound.label}
				content={pageNotFound.component}
				quotation={pageNotFound.quotation}
				author={pageNotFound.author}
			/>
		</div>
	);
}

export default RenderCards;
