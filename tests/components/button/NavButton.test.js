import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavButton from "../../../src/components/button/NavButton";

describe("NavButton component", () => {
	const setup = (props = {}) => {
		return render(
			<BrowserRouter>
				<NavButton {...props} />
			</BrowserRouter>
		);
	};

	it("renders with label and default class", () => {
		setup({ path: "/home", label: "Home" });
		const link = screen.getByRole("link", { name: /home/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveClass("button-font");
		expect(link).toHaveClass("nav-link");
		expect(link).toHaveClass("background-change");
	});

	it("does not render active class when isActive is false", () => {
		setup({ path: "/home", label: "Home" });
		const link = screen.getByRole("link", { name: /home/i });
		expect(link).not.toHaveClass("nav-link-active");
	});

	it("calls onClick function when clicked", () => {
		const onClickMock = jest.fn();
		setup({ path: "/home", label: "Home", onClick: onClickMock });
		const link = screen.getByRole("link", { name: /home/i });
		fireEvent.click(link);
		expect(onClickMock).toHaveBeenCalled();
		expect(link).toHaveClass("nav-link-active");
	});
});
