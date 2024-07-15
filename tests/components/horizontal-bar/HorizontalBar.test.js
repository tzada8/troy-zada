import React from "react";
import { render, screen } from "@testing-library/react";

import HorizontalBar from "../../../src/components/horizontal-bar/HorizontalBar";

describe("HorizontalBar Component", () => {
	it("renders without crashing", () => {
		const { container } = render(<HorizontalBar />);
		expect(container).toBeInTheDocument();
	});

	it("renders with default props", () => {
		render(<HorizontalBar />);
		const horizontalBar = screen.getByRole("separator");
		expect(horizontalBar).toHaveClass("generic-bar");
		expect(horizontalBar).not.toHaveClass("thick");
		expect(horizontalBar).not.toHaveClass("dotted");
		expect(horizontalBar).not.toHaveClass("light");
		expect(horizontalBar).not.toHaveClass("gradient-bar");
	});

	it("renders with thick prop", () => {
		render(<HorizontalBar thick />);
		const horizontalBar = screen.getByRole("separator");
		expect(horizontalBar).toHaveClass("thick");
	});

	it("renders with dotted prop", () => {
		render(<HorizontalBar dotted />);
		const horizontalBar = screen.getByRole("separator");
		expect(horizontalBar).toHaveClass("dotted");
	});

	it("renders with light prop", () => {
		render(<HorizontalBar light />);
		const horizontalBar = screen.getByRole("separator");
		expect(horizontalBar).toHaveClass("light");
	});

	it("renders with gradient prop", () => {
		render(<HorizontalBar gradient />);
		const horizontalBar = screen.getByRole("separator");
		expect(horizontalBar).toHaveClass("gradient-bar");
	});

	it("renders with custom className prop", () => {
		const customClass = "custom-class";
		render(<HorizontalBar className={customClass} />);
		const horizontalBar = screen.getByRole("separator");
		expect(horizontalBar).toHaveClass(customClass);
	});

	it("renders with multiple props combined", () => {
		render(<HorizontalBar thick dotted light />);
		const horizontalBar = screen.getByRole("separator");
		expect(horizontalBar).toHaveClass("thick");
		expect(horizontalBar).toHaveClass("dotted");
		expect(horizontalBar).toHaveClass("light");
	});
});
