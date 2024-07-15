import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import RoutingButton from "../../../src/components/button/RoutingButton";

jest.mock("../../../src/components/icon/Icon", () => {
	return function MockIcon() {
		return <div data-testid="mock-icon"></div>;
	};
});

describe("RoutingButton component", () => {
	it('renders as an external link when path includes "https://"', () => {
		const props = {
			label: "External Link",
			path: "https://external.com",
			icon: <div>Icon</div>,
		};

		const { getByText, container } = render(<RoutingButton {...props} />);

		const anchorElement = container.querySelector("a");
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).toHaveAttribute("href", "https://external.com");
		expect(anchorElement).toHaveAttribute("target", "_blank");
		expect(anchorElement).toHaveAttribute("rel", "noreferrer");

		expect(getByText("EXTERNAL LINK")).toBeInTheDocument();
	});

	it('renders as a Mailto link when path includes "mailto:"', () => {
		const props = {
			label: "Email Me",
			path: "mailto:someone@example.com",
			icon: <div>Icon</div>,
		};

		const { getByText, container } = render(<RoutingButton {...props} />);

		const anchorElement = container.querySelector("a");
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).toHaveAttribute("href", "mailto:someone@example.com");

		expect(getByText("EMAIL ME")).toBeInTheDocument();
	});

	it("renders as a Router Link for internal paths", () => {
		const props = {
			label: "Internal Link",
			path: "/internal",
			icon: <div>Icon</div>,
		};

		const { getByText, container } = render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		const linkElement = container.querySelector("a");
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute("href", "/internal");

		expect(getByText("INTERNAL LINK")).toBeInTheDocument();
	});

	it("renders icon only when label is not provided", () => {
		const props = {
			path: "/icon-only",
			icon: <div data-testid="mock-icon"></div>,
		};

		const { getByTestId, container } = render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		expect(getByTestId("mock-icon")).toBeInTheDocument();
		expect(container.querySelector("a")).toBeInTheDocument();
	});

	it("applies button-link class when label is provided", () => {
		const props = {
			label: "Button Label",
			path: "/button-link",
			icon: <div>Icon</div>,
		};

		const { container } = render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		const linkElement = container.querySelector("a");
		expect(linkElement).toHaveClass("button-link");
	});

	it("does not apply button-link class when only icon is provided", () => {
		const props = {
			path: "/icon-only",
			icon: <div data-testid="mock-icon"></div>,
		};

		const { container } = render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		const linkElement = container.querySelector("a");
		expect(linkElement).not.toHaveClass("button-link");
	});
});
