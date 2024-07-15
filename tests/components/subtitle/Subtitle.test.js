import React from "react";
import { render, screen } from "@testing-library/react";

import Subtitle from "../../../src/components/subtitle/Subtitle";

jest.mock("../../../src/components/icon/Icon", () => {
	return function MockIcon() {
		return <div data-testid="mock-icon"></div>;
	};
});

jest.mock("../../../src/components/horizontal-bar/HorizontalBar", () => {
	return function MockHorizontalBar() {
		return <div data-testid="mock-horizontal-bar"></div>;
	};
});

describe("Subtitle component", () => {
	it("renders with the correct label and icon", () => {
		render(<Subtitle label="Test Label" icon="test-icon" topSpacing={true} />);

		expect(screen.getByText("Test Label")).toBeInTheDocument();
		expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
		expect(screen.getByTestId("mock-horizontal-bar")).toBeInTheDocument();
	});

	it('applies "subtitle-container" class when topSpacing is true', () => {
		render(<Subtitle label="With Spacing" icon="test-icon" topSpacing={true} />);

		expect(screen.getByTestId("subtitle-container")).toHaveClass("subtitle-container");
	});

	it('does not apply "subtitle-container" class when topSpacing is false', () => {
		render(<Subtitle label="No Spacing" icon="test-icon" topSpacing={false} />);

		expect(screen.getByTestId("subtitle-container")).not.toHaveClass("subtitle-container");
	});

	it("renders Icon with the correct props", () => {
		render(<Subtitle label="Icon Props" icon="test-icon" topSpacing={false} />);

		const icon = screen.getByTestId("mock-icon");
		expect(icon).toBeInTheDocument();
	});

	it("renders HorizontalBar", () => {
		render(<Subtitle label="Horizontal Bar" icon="test-icon" topSpacing={false} />);

		const horizontalBar = screen.getByTestId("mock-horizontal-bar");
		expect(horizontalBar).toBeInTheDocument();
	});
});
