import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "../../../src/components/footer/Footer";

jest.mock("../../../src/components/horizontal-bar/HorizontalBar", () => (props) => (
	<div data-testid="horizontal-bar" data-light={props.light ? "true" : "false"}></div>
));

describe("Footer component", () => {
	it("displays the quote and author when provided", () => {
		const quote = "Test Quote";
		const author = "Test Author";

		render(<Footer quote={quote} author={author} />);

		expect(screen.getByText(`"${quote}" -`)).toBeInTheDocument();
		expect(screen.getByText(author)).toBeInTheDocument();
	});

	it("does not display the quote and author when not provided", () => {
		render(<Footer />);

		expect(screen.queryByText(/".*"/)).toBeNull();
		expect(screen.queryByText(/- .*$/)).toBeNull();
	});

	it("displays the correct quote and author when only quote is provided", () => {
		const quote = "Test Quote";
		render(<Footer quote={quote} />);

		expect(screen.queryByText(`"${quote}"`)).toBeNull();
	});

	it("displays the correct quote and author when only author is provided", () => {
		const author = "Test Author";
		render(<Footer author={author} />);

		expect(screen.queryByText(author)).toBeNull();
	});

	it("displays the correct quote and author when quote is provided but no author", () => {
		const quote = "Test Quote";
		render(<Footer quote={quote} />);

		expect(screen.queryByText(`"${quote}"`)).toBeNull();
	});

	it("displays the correct quote and author when author is provided but no quote", () => {
		const author = "Test Author";
		render(<Footer author={author} />);

		expect(screen.queryByText(author)).toBeNull();
	});
});
