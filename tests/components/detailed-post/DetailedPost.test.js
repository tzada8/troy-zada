import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import DetailedPost from "../../../src/components/detailed-post/DetailedPost";

jest.mock("../../../src/components/icon/Icon", () => {
	return function MockIcon() {
		return <div data-testid="mock-icon"></div>;
	};
});

jest.mock("../../../src/components/button/RoutingButton", () => {
	return function MockRoutingButton() {
		return <button data-testid="mock-routing-button"></button>;
	};
});

jest.mock("../../../src/components/post-image/PostImage", () => {
	return function MockPostImage() {
		return <div data-testid="mock-post-image"></div>;
	};
});

jest.mock("../../../src/components/horizontal-bar/HorizontalBar", () => {
	return function MockHorizontalBar() {
		return <div data-testid="mock-horizontal-bar"></div>;
	};
});

describe("DetailedPost component", () => {
	it("renders the post with the correct details", () => {
		const props = {
			label: "Test Title",
			details: "Test Details",
			path: "/test-path",
			src: "test-src.jpg",
			github: "https://github.com/test",
		};

		render(
			<Router>
				<DetailedPost {...props} />
			</Router>
		);

		expect(screen.getByText("Test Title")).toBeInTheDocument();
		expect(screen.getByText("Test Details")).toBeInTheDocument();
		expect(screen.getByTestId("mock-post-image")).toBeInTheDocument();
		expect(screen.getByTestId("mock-horizontal-bar")).toBeInTheDocument();
	});

	it("renders as a link when path is provided", () => {
		const props = {
			label: "Clickable Post",
			details: "Clickable Details",
			path: "/path",
			src: "src.jpg",
		};

		render(
			<Router>
				<DetailedPost {...props} />
			</Router>
		);

		expect(screen.getByTestId("post-content")).toBeInTheDocument();
	});

	it("does not render as a link when path is not provided", () => {
		const props = {
			label: "Non-clickable Post",
			details: "Non-clickable Details",
			src: "src.jpg",
		};

		render(
			<Router>
				<DetailedPost {...props} />
			</Router>
		);

		expect(screen.queryByTestId("post-content")).not.toBeInTheDocument();
	});

	it('renders GitHub RoutingButton when "github" prop is provided', () => {
		const props = {
			label: "GitHub Post",
			details: "GitHub Details",
			src: "src.jpg",
			github: "https://github.com/test",
		};

		render(
			<Router>
				<DetailedPost {...props} />
			</Router>
		);

		expect(screen.getByTestId("mock-routing-button")).toBeInTheDocument();
	});

	it("renders Icon with FaAngleRight when path is provided", () => {
		const props = {
			label: "Icon Post",
			details: "Icon Details",
			path: "/path",
			src: "src.jpg",
		};

		render(
			<Router>
				<DetailedPost {...props} />
			</Router>
		);

		expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
	});

	it('applies "post-container" class when bottomSpacing is true', () => {
		const props = {
			label: "Spacing Post",
			details: "Spacing Details",
			src: "src.jpg",
			bottomSpacing: true,
		};

		render(
			<Router>
				<DetailedPost {...props} />
			</Router>
		);

		expect(screen.getByTestId("post-container")).toHaveClass("post-container");
	});

	it('does not apply "post-container" class when bottomSpacing is false', () => {
		const props = {
			label: "No Spacing Post",
			details: "No Spacing Details",
			src: "src.jpg",
			bottomSpacing: false,
		};

		render(
			<Router>
				<DetailedPost {...props} />
			</Router>
		);

		expect(screen.getByTestId("post-container")).not.toHaveClass("post-container");
	});
});
