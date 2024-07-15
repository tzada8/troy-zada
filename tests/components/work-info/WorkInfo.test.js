import React from "react";
import { render, screen } from "@testing-library/react";

import WorkInfo from "../../../src/components/work-info/WorkInfo";

jest.mock("../../../src/components/horizontal-bar/HorizontalBar", () => () => (
	<div data-testid="horizontal-bar" />
));

describe("WorkInfo Component", () => {
	const mockProps = {
		label: "Software Engineer",
		company: "Tech Corp",
		duration: "Jan 2020 - Present",
		details: [
			"Developed key features",
			"Collaborated with team members",
			"Improved performance",
		],
	};

	it("renders without crashing", () => {
		render(<WorkInfo {...mockProps} />);
		expect(screen.getByText("Software Engineer")).toBeInTheDocument();
		expect(screen.getByText("Tech Corp, Jan 2020 - Present")).toBeInTheDocument();
	});

	it("displays the correct company and duration string when company is provided", () => {
		render(<WorkInfo {...mockProps} />);
		expect(screen.getByText("Tech Corp, Jan 2020 - Present")).toBeInTheDocument();
	});

	it("displays the correct duration string when company is not provided", () => {
		const { duration, label, details } = mockProps;
		render(<WorkInfo duration={duration} label={label} details={details} />);
		expect(screen.getByText("Jan 2020 - Present")).toBeInTheDocument();
	});

	it("renders the HorizontalBar component", () => {
		render(<WorkInfo {...mockProps} />);
		expect(screen.getByTestId("horizontal-bar")).toBeInTheDocument();
	});

	it("renders the details list correctly", () => {
		render(<WorkInfo {...mockProps} />);
		mockProps.details.forEach((detail, index) => {
			expect(screen.getByText(detail)).toBeInTheDocument();
		});
	});
});
