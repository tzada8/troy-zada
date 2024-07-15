import React from "react";
import { render, screen } from "@testing-library/react";

import ProgressBar from "../../../src/components/progress-bar/ProgressBar";

describe("ProgressBar Component", () => {
	it("renders with the correct label and percentage", () => {
		const label = "Progress";
		const percent = 75;

		render(<ProgressBar label={label} percent={percent} />);

		const labelElement = screen.getByText(label);
		const percentageElement = screen.getByText(`${percent}%`);

		expect(labelElement).toBeInTheDocument();
		expect(percentageElement).toBeInTheDocument();
	});

	it("renders the progress bar with the correct width", () => {
		const percent = 50;

		render(<ProgressBar percent={percent} />);

		const progressBarElement = screen.getByTestId("progress-bar__progress");
		expect(progressBarElement).toHaveStyle(`width: ${percent}%`);
	});

	it("renders with zero percentage", () => {
		const percent = 0;

		render(<ProgressBar percent={percent} />);

		const percentageElement = screen.getByText(`${percent}%`);
		const progressBarElement = screen.getByTestId("progress-bar__progress");

		expect(percentageElement).toBeInTheDocument();
		expect(progressBarElement).toHaveStyle(`width: ${percent}%`);
	});

	it("renders with 100 percentage", () => {
		const percent = 100;

		render(<ProgressBar percent={percent} />);

		const percentageElement = screen.getByText(`${percent}%`);
		const progressBarElement = screen.getByTestId("progress-bar__progress");

		expect(percentageElement).toBeInTheDocument();
		expect(progressBarElement).toHaveStyle(`width: ${percent}%`);
	});
});
