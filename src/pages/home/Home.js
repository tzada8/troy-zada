import React from "react";
import { MdContactMail } from "react-icons/md";

import { FULL_NAME, socials } from "../../data/constants";
import { contact, routes } from "../../routes/routes";

import HorizontalBar from "../../components/horizontal-bar/HorizontalBar";
import RoutingButton from "../../components/button/RoutingButton";
import SocialIcon from "../../components/social-icon/SocialIcon";
import "../../components/card/Card.css";
import "./Home.css";

export default function Home(props) {
	return (
		<div className={`card-box center ${props.isOnlyComp ? "home-center" : "home-left"}`}>
			<div className="card-container">
				<div className="card-content center">
					<div className={`home-img-round ${props.isOnlyComp ? "headshot1" : "headshot2"}`} />

					<div className="home-intro-title">
						{/* Troy Zada, an Engineering Student, a Programmer, Lifelong Learner, ... */}
						<h1 className="home-intro-name">{FULL_NAME}</h1>
						<h3 className="home-intro-program">
							Management Engineering Student @ University of Waterloo
						</h3>
						<HorizontalBar gradient />
					</div>

					<p>
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

					<RoutingButton
						path={routes[contact].path}
						label="GET IN TOUCH"
						icon={<MdContactMail />}
					/>
				</div>
			</div>
		</div>
	);
}
