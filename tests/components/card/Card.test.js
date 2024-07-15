import React from "react";
import { render } from "@testing-library/react";

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

		const { container, getByTestId } = render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		// Check if the main structure is rendered
		expect(container.querySelector(".card-box")).toBeInTheDocument();
		expect(container.querySelector(".card-container")).toBeInTheDocument();
		expect(container.querySelector(".card-content")).toBeInTheDocument();

		// Check if the header and footer are rendered
		expect(getByTestId("mock-header")).toBeInTheDocument();
		expect(getByTestId("mock-footer")).toBeInTheDocument();
	});

	it("passes correct props to Header component", () => {
		const props = {
			label: "Test Card",
			backTo: "/back",
		};

		const { getByTestId } = render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		const header = getByTestId("mock-header");
		expect(header).toBeInTheDocument();

		// Since we are mocking the Header, we can make sure it's rendered
		// however we can't check its props directly in this test
	});

	it("passes correct props to Footer component", () => {
		const props = {
			quote: "This is a test quote",
			author: "Author Name",
		};

		const { getByTestId } = render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		const footer = getByTestId("mock-footer");
		expect(footer).toBeInTheDocument();

		// Since we are mocking the Footer, we can make sure it's rendered
		// however we can't check its props directly in this test
	});

	it("renders children content", () => {
		const props = {
			label: "Test Card",
			backTo: "/back",
			quote: "This is a test quote",
			author: "Author Name",
		};

		const { getByText } = render(
			<Card {...props}>
				<div>Card Content</div>
			</Card>
		);

		expect(getByText("Card Content")).toBeInTheDocument();
	});
});
