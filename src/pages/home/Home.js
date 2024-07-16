import React from "react";
import { FaEnvelope } from "react-icons/fa6";

import { socials } from "../../data/constants";
import { contact, home, routes } from "../../routes/routes";

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
					<div className="main-content-flex center-content">
						<div
							className={`home-img-round ${
								props.isOnlyComp ? "headshot1" : "headshot2"
							}`}
						/>
						<h1 className="home-intro-name">{home.label}</h1>
						<h3>{home.sublabel}</h3>
						<HorizontalBar className="home-intro-bar" gradient />

						<p>{home.description}</p>
						<div className="social-media">
							{socials.map((s, k) => (
								<SocialIcon
									key={k}
									aria={s.aria}
									link={s.link}
									icon={s.icon}
									tooltip={s.tooltip}
								/>
							))}
						</div>

						<RoutingButton
							path={routes[contact].path}
							label="GET IN TOUCH"
							icon={<FaEnvelope />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
