import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { home } from "../../../src/routes/routes";

import Logo from "../../../src/components/logo/Logo";

describe("Logo Component", () => {
	it("renders the Logo component", () => {
		render(
			<BrowserRouter>
				<Logo />
			</BrowserRouter>
		);

		const logoElement = screen.getByText("TZ");
		expect(logoElement).toBeInTheDocument();
	});

	it("Link has the correct path", () => {
		render(
			<BrowserRouter>
				<Logo />
			</BrowserRouter>
		);

		const linkElement = screen.getByRole("link");
		expect(linkElement).toHaveAttribute("href", home.path);
	});

	it("calls onClick handler when clicked", () => {
		const handleClick = jest.fn();

		render(
			<BrowserRouter>
				<Logo onClick={handleClick} />
			</BrowserRouter>
		);

		const linkElement = screen.getByRole("link");
		fireEvent.click(linkElement);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("applies additional class names", () => {
		const customClass = "custom-class";

		render(
			<BrowserRouter>
				<Logo className={customClass} />
			</BrowserRouter>
		);

		const linkElement = screen.getByRole("link");
		expect(linkElement).toHaveClass("logo-container");
		expect(linkElement).toHaveClass(customClass);
	});
});
