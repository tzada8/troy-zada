import React from "react";

import { FULL_NAME, socials } from "../../data/Constants";

import SocialIcon from "../../components/social-icon/SocialIcon";
import "../../components/cards/display-main/CreateCards.css";
import "./Home.css";

export default function Home(props) {
	return (
		<div
			className={
				props.isOnlyComp
					? "card-box home-vis"
					: "card-box home-vis home-loc"
			}
		>
			<div className="card-container">
				{/* ROUND HEADSHOT IMAGE */}
				<div
					className={
						props.isOnlyComp
							? "headshot1 home-img-round"
							: "headshot2 home-img-round"
					}
				/>
				{/* TITLE OF CARD */}
				<div className="home-intro-title">
					{/* Troy Zada, an Engineering Student, a Programmer, Lifelong Learner, ... */}
					<h1 className="home-intro-name">{FULL_NAME}</h1>
					{/* CURRENT ROLE/POSITION */}
					<h4 className="home-intro-program">
						Management Engineering Student @ University of Waterloo
					</h4>
					<hr className="horizontal-bar__fade" />
				</div>

				{/* BRIEF OVERALL DESCRIPTION */}
				<p id="home-paragraph">
					Dedicated and hard-working engineering student with a passion for
					programming, innovation, optimization, and learning. "Live as if
					you were to die tomorrow. Learn as if you were to live forever."
					- M.K. Gandhi
				</p>

				<div className="social-media">
					{socials.map((s, k) => (
						<SocialIcon key={k} link={s.link} icon={s.icon} tooltip={s.tooltip} />
					))}
				</div>

				<p id="copyright">
					Copyright © 2021 Troy Zada. All Rights Reserved.
				</p>
			</div>
		</div>
	);
}
