import React from "react";
import { render, screen } from "@testing-library/react";

import GroupedList from "../../../src/components/text-details/GroupedList";

describe("GroupedList component", () => {
	const headerWithoutColon = "Test Header";
	const headerWithColon = "Test Header:";
	const bullets = [
		{ label: "Label 1", content: "Content 1" },
		{ label: "Label 2", content: "Content 2" },
	];

	it("renders without crashing", () => {
		render(<GroupedList header="" bullets={[]} />);
	});

	it("displays the header correctly without colon", () => {
		render(<GroupedList header={headerWithoutColon} bullets={bullets} />);

		const header = screen.getByText(headerWithoutColon);
		expect(header).toBeInTheDocument();
		expect(header).toHaveClass("bold", "justify");
	});

	it("displays the header correctly with colon", () => {
		render(<GroupedList header={headerWithColon} bullets={bullets} />);

		const header = screen.getByText(headerWithColon);
		expect(header).toBeInTheDocument();
		expect(header).toHaveClass("justify");
		expect(header).not.toHaveClass("bold");
	});

	it("renders the bullets correctly", () => {
		render(<GroupedList header={headerWithoutColon} bullets={bullets} />);

		bullets.forEach((bullet, index) => {
			const listItem = screen.getByText(`${bullet.label}:`);
			expect(listItem).toBeInTheDocument();
			expect(listItem).toHaveClass("bold");

			const content = screen.getByText(bullet.content);
			expect(content).toBeInTheDocument();
		});
	});

	it("does not render the <br /> element when last prop is true", () => {
		render(<GroupedList header={headerWithoutColon} bullets={bullets} last={true} />);

		expect(screen.queryByRole("separator")).toBeNull();
	});

	it("handles empty bullets list gracefully", () => {
		render(<GroupedList header={headerWithoutColon} bullets={[]} />);

		expect(screen.getByText(headerWithoutColon)).toBeInTheDocument();
		expect(screen.queryAllByRole("listitem").length).toBe(0);
	});
});
