import React from "react";
import { render, screen } from "@testing-library/react";

import Popup from "../../../src/components/popup/Popup";

describe("Popup Component", () => {
	const renderPopup = (status, label, text) => {
		render(<Popup status={status} label={label} text={text} />);
	};

	it("renders success popup with correct icon, color, class, label, and text", () => {
		renderPopup("success", "Success Label", "Success Text");

		const popupElement = screen.getByText("Success Label").parentElement;
		expect(popupElement).toHaveClass("success-popup");
		expect(popupElement).toHaveClass("submit-popup");
		expect(popupElement).toHaveClass("center");
		expect(screen.getByText("Success Text")).toBeInTheDocument();
		const svgElement = document.querySelector(".generic-icon");
		expect(svgElement).toHaveClass("green-color");
	});

	it("renders failure popup with correct icon, color, class, label, and text", () => {
		renderPopup("failure", "Failure Label", "Failure Text");

		const popupElement = screen.getByText("Failure Label").parentElement;
		expect(popupElement).toHaveClass("failure-popup");
		expect(popupElement).toHaveClass("submit-popup");
		expect(popupElement).toHaveClass("center");
		expect(screen.getByText("Failure Text")).toBeInTheDocument();
		const svgElement = document.querySelector(".generic-icon");
		expect(svgElement).toHaveClass("red-color");
	});

	it("renders construction popup with correct icon, color, class, label, and text", () => {
		renderPopup("construction", "Construction Label", "Construction Text");

		const popupElement = screen.getByText("Construction Label").parentElement;
		expect(popupElement).toHaveClass("construction-popup");
		expect(popupElement).toHaveClass("submit-popup");
		expect(popupElement).toHaveClass("center");
		expect(screen.getByText("Construction Text")).toBeInTheDocument();
		const svgElement = document.querySelector(".generic-icon");
		expect(svgElement).toHaveClass("orange-color");
	});

	it("does not render popup when status is not provided", () => {
		renderPopup(null, "No Status Label", "No Status Text");

		const popupElement = screen.queryByText("No Status Label");
		expect(popupElement).toBeNull();
	});
});
