import React from "react";
import { render } from "@testing-library/react";

import { FULL_NAME } from "../../../src/data/constants";

import Card from "../../../src/components/card/Card";
import DetailedPost from "../../../src/components/detailed-post/DetailedPost";
import Subcard from "../../../src/components/card/Subcard";

jest.mock("../../../src/components/card/Card", () =>
	jest.fn(({ children }) => <div>Card {children}</div>)
);

jest.mock("../../../src/components/detailed-post/DetailedPost", () =>
	jest.fn(() => <div>DetailedPost</div>)
);

describe("Subcard Component", () => {
	it("renders without crashing", () => {
		const { container } = render(<Subcard />);
		expect(container).toBeInTheDocument();
	});

	it("renders Card component with correct props", () => {
		const label = "Test Label";
		const backTo = "/home";
		render(<Subcard label={label} backTo={backTo} />);

		expect(Card).toHaveBeenCalledWith(expect.objectContaining({ label, backTo }), {});
	});

	it("renders DetailedPost component with correct props", () => {
		const label = "Test Label";
		const image = "Test Image";
		const date = "2024-07-14";
		const github = "https://github.com/test";
		render(<Subcard label={label} image={image} date={date} github={github} />);

		const details = `${FULL_NAME} \u00A0|\u00A0 ${date}`;
		expect(DetailedPost).toHaveBeenCalledWith({ label, src: image, details, github }, {});
	});
});
