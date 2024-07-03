import React from "react";

import { pageNotFound, routes } from "../../../routes/routes";

import CreateCards from "./CreateCards";
import Home from "../../../pages/home/Home";

// DETERMINES WHICH CARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderCards(props) {
	return (
		<div>
			<Home isOnlyComp={props.home} />
			{routes.map((r, k) => {
				return (
					<CreateCards
						key={k}
						label={r.label}
						path={r.path}
						content={r.element}
						quote={r.quote}
						author={r.author}
					/>
				);
			})}
			<CreateCards
				isActive={props.pageNotFound}
				label={pageNotFound.label}
				content={pageNotFound.element}
				quote={pageNotFound.quote}
				author={pageNotFound.author}
			/>
		</div>
	);
}

export default RenderCards;
