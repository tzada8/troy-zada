import React from "react";

import "./Button.css";

export default function FormButton(props) {
	return (
		<input
			type="submit"
			className={`button-font bold submit-button ${props.className}`}
			value={props.label}
			disabled={props.disabled}
		/>
	);
}
