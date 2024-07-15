import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdConstruction, MdError } from "react-icons/md";

import Icon from "../icon/Icon";
import "./Popup.css";

export default function Popup(props) {
	const popupStyle =
		props.status === "success"
			? {
					icon: <FaCircleCheck />,
					color: "green",
					class: "success-popup",
				}
			: props.status === "failure"
				? {
						icon: <MdError />,
						color: "red",
						class: "failure-popup",
					}
				: props.status === "construction"
					? {
							icon: <MdConstruction />,
							color: "orange",
							class: "construction-popup",
						}
					: {};

	return (
		props.status && (
			<div className={`submit-popup center ${popupStyle.class}`}>
				<Icon image={popupStyle.icon} color={popupStyle.color} />
				<h3>{props.label}</h3>
				<p>{props.text}</p>
			</div>
		)
	);
}
