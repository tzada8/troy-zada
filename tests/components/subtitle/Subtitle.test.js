import React from "react";
import { render } from "@testing-library/react";

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
		const { getByText, getByTestId } = render(
			<Subtitle label="Test Label" icon="test-icon" topSpacing={true} />
		);

		expect(getByText("Test Label")).toBeInTheDocument();
		expect(getByTestId("mock-icon")).toBeInTheDocument();
		expect(getByTestId("mock-horizontal-bar")).toBeInTheDocument();
	});

	it('applies "subtitle-container" class when topSpacing is true', () => {
		const { container } = render(
			<Subtitle label="With Spacing" icon="test-icon" topSpacing={true} />
		);

		expect(container.firstChild).toHaveClass("subtitle-container");
	});

	it('does not apply "subtitle-container" class when topSpacing is false', () => {
		const { container } = render(
			<Subtitle label="No Spacing" icon="test-icon" topSpacing={false} />
		);

		expect(container.firstChild).not.toHaveClass("subtitle-container");
	});

	it("renders Icon with the correct props", () => {
		const { getByTestId } = render(
			<Subtitle label="Icon Props" icon="test-icon" topSpacing={false} />
		);

		const icon = getByTestId("mock-icon");
		expect(icon).toBeInTheDocument();
	});

	it("renders HorizontalBar", () => {
		const { getByTestId } = render(
			<Subtitle label="Horizontal Bar" icon="test-icon" topSpacing={false} />
		);

		const horizontalBar = getByTestId("mock-horizontal-bar");
		expect(horizontalBar).toBeInTheDocument();
	});
});
