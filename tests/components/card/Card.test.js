import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "../../../src/components/card/Card";

jest.mock("../../../src/components/header/Header", () => {
	return function MockHeader() {
		return <div data-testid="mock-header"></div>;
	};
});

jest.mock("../../../src/components/footer/Footer", () => {
	return function MockFooter() {
		return <div data-testid="mock-footer"></div>;
	};
});

describe("Card component", () => {
	it("renders the card with correct structure", () => {
		const props = {
			label: "Test Card",
			backTo: "/back",
			quote: "This is a test quote",
			author: "Author Name",
		};

		render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		expect(screen.getByTestId("card-box")).toBeInTheDocument();
		expect(screen.getByTestId("mock-header")).toBeInTheDocument();
		expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
	});

	it("passes correct props to Header component", () => {
		const props = {
			label: "Test Card",
			backTo: "/back",
		};

		render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		const header = screen.getByTestId("mock-header");
		expect(header).toBeInTheDocument();
	});

	it("passes correct props to Footer component", () => {
		const props = {
			quote: "This is a test quote",
			author: "Author Name",
		};

		render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		const footer = screen.getByTestId("mock-footer");
		expect(footer).toBeInTheDocument();
	});

	it("renders children content", () => {
		const props = {
			label: "Test Card",
			backTo: "/back",
			quote: "This is a test quote",
			author: "Author Name",
		};

		render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		expect(screen.getByText("Card Content")).toBeInTheDocument();
	});
});
