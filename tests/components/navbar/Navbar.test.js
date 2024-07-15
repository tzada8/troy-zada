import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { routes } from "../../../src/routes/routes";

import Navbar from "../../../src/components/navbar/Navbar";

jest.mock("../../../src/components/icon/Icon", () => (props) => (
	<div data-testid="icon" onClick={props.onClick}>
		{props.image}
	</div>
));

jest.mock("../../../src/components/logo/Logo", () => (props) => (
	<div data-testid="logo" onClick={props.onClick}>
		{props.className}
	</div>
));

jest.mock("../../../src/components/button/NavButton", () => (props) => (
	<div data-testid="nav-button" onClick={props.onClick}>
		{props.label}
	</div>
));

describe("Navbar Component", () => {
	it("renders without crashing", () => {
		const isMid = false;
		render(<Navbar isMid={isMid} />);
		expect(screen.getByTestId("logo")).toBeInTheDocument();
		expect(screen.getByTestId("icon")).toBeInTheDocument();
		routes.forEach((route) => {
			expect(screen.getByText(route.label)).toBeInTheDocument();
		});
	});

	it("toggles menu when icon is clicked", () => {
		const isMid = false;
		render(<Navbar isMid={isMid} />);

		const menuIcon = screen.getByTestId("icon");
		const navMenu = screen.getByRole("navigation").querySelector(".nav-menu");

		expect(navMenu).not.toHaveClass("active");

		fireEvent.click(menuIcon);

		expect(navMenu).toHaveClass("active");

		fireEvent.click(menuIcon);

		expect(navMenu).not.toHaveClass("active");
	});

	it("closes menu when a NavButton is clicked", () => {
		const isMid = false;
		render(<Navbar isMid={isMid} />);

		const menuIcon = screen.getByTestId("icon");
		fireEvent.click(menuIcon);

		const navButton = screen.getByText(routes[0].label);
		const navMenu = screen.getByRole("navigation").querySelector(".nav-menu");
		fireEvent.click(navButton);

		expect(navMenu).not.toHaveClass("active");
	});

	it("closes menu when logo is clicked", () => {
		const isMid = false;
		render(<Navbar isMid={isMid} />);

		const menuIcon = screen.getByTestId("icon");
		fireEvent.click(menuIcon);

		const logo = screen.getByTestId("logo");
		const navMenu = screen.getByRole("navigation").querySelector(".nav-menu");

		fireEvent.click(logo);

		expect(navMenu).not.toHaveClass("active");
	});

	it("applies correct class based on isMid prop", () => {
		const { rerender } = render(<Navbar isMid={true} />);
		expect(screen.getByRole("navigation")).toHaveClass("middle");
		rerender(<Navbar isMid={false} />);
		expect(screen.getByRole("navigation")).toHaveClass("left");
	});
});
