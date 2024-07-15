import React from "react";
import { render, screen } from "@testing-library/react";

import Subheading from "../../../src/components/text-details/Subheading";

describe("Subheading component", () => {
	it("renders without crashing", () => {
		render(<Subheading />);
	});

	it("displays the label when provided", () => {
		const label = "Test Subheading";
		render(<Subheading label={label} />);

		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it("renders with the correct classes", () => {
		const label = "Test Subheading with Classes";
		render(<Subheading label={label} />);

		const subheading = screen.getByText(label);
		expect(subheading).toHaveClass("content-subheading");
		expect(subheading).toHaveClass("justify");
	});

	it("handles empty label gracefully", () => {
		render(<Subheading label="" />);

		expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
		expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("");
	});
});
