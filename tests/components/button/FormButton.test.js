import React from "react";
import { render, screen } from "@testing-library/react";

import FormButton from "../../../src/components/button/FormButton";

describe("FormButton component", () => {
	it("renders with label and class", () => {
		render(<FormButton label="Submit" className="custom-class" />);
		const button = screen.getByRole("button", { name: /submit/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("button-font");
		expect(button).toHaveClass("bold");
		expect(button).toHaveClass("submit-button");
		expect(button).toHaveClass("custom-class");
	});

	it("renders disabled when disabled prop is true", () => {
		render(<FormButton label="Submit" disabled={true} />);
		const button = screen.getByRole("button", { name: /submit/i });
		expect(button).toBeDisabled();
	});
});
