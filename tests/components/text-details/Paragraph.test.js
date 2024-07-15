import React from "react";
import { render, screen } from "@testing-library/react";

import Paragraph from "../../../src/components/text-details/Paragraph";

describe("Paragraph component", () => {
	it("renders without crashing", () => {
		render(<Paragraph />);
	});

	it("displays the content when provided", () => {
		const content = "This is a test paragraph.";
		render(<Paragraph content={content} />);

		expect(screen.getByText(content)).toBeInTheDocument();
	});

	it("renders with the correct classes", () => {
		const content = "This is a test paragraph with classes.";
		render(<Paragraph content={content} />);

		const paragraph = screen.getByText(content);
		expect(paragraph).toHaveClass("indent");
		expect(paragraph).toHaveClass("justify");
	});

	it("does not render the <br /> element when last prop is true", () => {
		render(<Paragraph last={true} />);

		expect(screen.queryByRole("separator")).toBeNull();
	});
});
