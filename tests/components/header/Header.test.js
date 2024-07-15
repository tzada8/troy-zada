import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "../../../src/components/header/Header";

describe("Header component", () => {
	it("renders without crashing", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
	});

	it("displays the label when provided", () => {
		const label = "Test Label";
		render(
			<BrowserRouter>
				<Header label={label} />
			</BrowserRouter>
		);

		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it("does not display the label when not provided", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);

		expect(screen.queryByText(/.+/)).toBeNull();
	});

	it("renders the back button when backTo prop is provided", () => {
		const path = "/back";
		render(
			<BrowserRouter>
				<Header backTo={path} />
			</BrowserRouter>
		);

		const button = screen.getByRole("link", { href: "/back" });
		expect(button).toBeInTheDocument();
	});

	it("does not render the back button when backTo prop is not provided", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);

		expect(screen.queryByRole("link", { href: "/back" })).toBeNull();
	});
});
