import React from "react";

// MENU CONSTANTS FOR CARD TITLES
import { navbarData, pageNotFound } from "../../../data/NavbarData";
import CreateCards from "./CreateCards";
import Home from "../../../pages/home/Home";

// DETERMINES WHICH CARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderCards(props) {
	return (
		<div>
			<Home isOnlyComp={props.home} />
			{Object.keys(navbarData).map((key) => {
				return (
					<CreateCards
						label={navbarData[key].label}
						path={navbarData[key].path}
						content={navbarData[key].component}
						quotation={navbarData[key].quotation}
						author={navbarData[key].author}
					/>
				);
			})}
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
