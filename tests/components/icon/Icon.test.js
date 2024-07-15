import React from "react";
import { render } from "@testing-library/react";

import Icon from "../../../src/components/icon/Icon";

describe("Icon Component", () => {
	it("renders with default classes", () => {
		const { container } = render(<Icon image={<div />} color="blue" />);

		const iconElement = container.querySelector(".generic-icon");
		expect(iconElement).toHaveClass("blue-color");
		expect(iconElement).not.toHaveClass("clickable-blue");
		expect(iconElement).not.toHaveClass("large");
		expect(iconElement).not.toHaveClass("small");
	});

	it("applies large size class when large prop is true", () => {
		const { container } = render(<Icon image={<div />} large color="blue" />);

		const iconElement = container.querySelector(".generic-icon");
		expect(iconElement).toHaveClass("large");
		expect(iconElement).not.toHaveClass("small");
	});

	it("applies small size class when small prop is true", () => {
		const { container } = render(<Icon image={<div />} small color="blue" />);

		const iconElement = container.querySelector(".generic-icon");
		expect(iconElement).toHaveClass("small");
		expect(iconElement).not.toHaveClass("large");
	});

	it("applies clickable-grey class when clickable is true and color is white", () => {
		const { container } = render(<Icon image={<div />} clickable color="white" />);

		const iconElement = container.querySelector(".generic-icon");
		expect(iconElement).toHaveClass("clickable-grey");
	});

	it("applies clickable-blue class when clickable is true and color is not white", () => {
		const { container } = render(<Icon image={<div />} clickable color="blue" />);

		const iconElement = container.querySelector(".generic-icon");
		expect(iconElement).toHaveClass("clickable-blue");
	});

	it("combines all custom classes correctly", () => {
		const customClass = "custom-class";
		const { container } = render(
			<Icon image={<div />} large clickable color="blue" className={customClass} />
		);

		const iconElement = container.querySelector(".generic-icon");
		expect(iconElement).toHaveClass("large");
		expect(iconElement).toHaveClass("blue-color");
		expect(iconElement).toHaveClass("clickable-blue");
		expect(iconElement).toHaveClass(customClass);
	});
});
