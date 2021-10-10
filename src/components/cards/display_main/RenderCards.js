import React from "react";

// MENU CONSTANTS FOR CARD TITLES
import { navbarCategories, PAGE_NOT_FOUND } from "../../Constants";

// CARDS
import Home from "../home/Home";
import CreateCards from "./CreateCards";

// CONTENT
import Portfolio from "../content/portfolio/Portfolio";
import Skills from "../content/skills/Skills";
import Experience from "../content/experience/Experience";
import Blog from "../content/blog/Blog";
import Contact from "../content/contact/Contact";
import PageNotFound from "../content/page_not_found/PageNotFound";

// DETERMINES WHICH CARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderCards(props) {
	return (
		<div>
			{/* HOME */}
			<Home isOnlyComp={props.home} />
			{/* EXPERIENCE */}
			<CreateCards
				isActive={props.experience}
				title={navbarCategories.experience.label}
				content={<Experience />}
				quotation="The only source of knowledge is experience"
				author="Albert Einstein"
			/>
			{/* SKILLS */}
			<CreateCards
				isActive={props.skills}
				title={navbarCategories.skills.label}
				content={<Skills />}
				quotation="Tell me and I forget, teach me and I may remember, involve me and I learn"
				author="Benjamin Franklin"
			/>
			{/* PORTFOLIO */}
			<CreateCards
				isActive={props.portfolio}
				title={navbarCategories.portfolio.label}
				content={<Portfolio />}
				quotation="As practice makes perfect, I cannot but make progress; each drawing one makes, each study one paints, is a step forward"
				author="Vincent Van Gogh"
			/>
			{/* BLOG */}
			{/* "A capacity, and taste, for reading gives access to whatever has already been discovered by others" - Abraham Lincoln */}
			<CreateCards
				isActive={props.blog}
				title={navbarCategories.blog.label}
				content={<Blog />}
				quotation="The reading of all good books is like a conversation with the finest minds of past centuries"
				author="Rene Descartes"
			/>
			{/* CONTACT */}
			<CreateCards
				isActive={props.contact}
				title={navbarCategories.contact.label}
				content={<Contact />}
				quotation="The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience"
				author="Eleanor Roosevelt"
			/>
			{/* PAGE NOT FOUND */}
			<CreateCards
				isActive={props.pageNotFound}
				title={PAGE_NOT_FOUND}
				content={<PageNotFound />}
				quotation="Understanding a question is half the answer"
				author="Socrates"
			/>
		</div>
	);
}

export default RenderCards;
