import React from "react";
import { render, screen } from "@testing-library/react";
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

		render(<RoutingButton {...props} />);

		const anchorElement = screen.getByTestId("external-link");
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).toHaveAttribute("href", "https://external.com");
		expect(anchorElement).toHaveAttribute("target", "_blank");
		expect(anchorElement).toHaveAttribute("rel", "noreferrer");

		expect(screen.getByText("EXTERNAL LINK")).toBeInTheDocument();
	});

	it('renders as a Mailto link when path includes "mailto:"', () => {
		const props = {
			label: "Email Me",
			path: "mailto:someone@example.com",
			icon: <div>Icon</div>,
		};

		render(<RoutingButton {...props} />);

		const anchorElement = screen.getByTestId("external-link");
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).toHaveAttribute("href", "mailto:someone@example.com");

		expect(screen.getByText("EMAIL ME")).toBeInTheDocument();
	});

	it("renders as a Router Link for internal paths", () => {
		const props = {
			label: "Internal Link",
			path: "/internal",
			icon: <div>Icon</div>,
		};

		render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		const linkElement = screen.getByTestId("internal-link");
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute("href", "/internal");

		expect(screen.getByText("INTERNAL LINK")).toBeInTheDocument();
	});

	it("renders icon only when label is not provided", () => {
		const props = {
			path: "/icon-only",
			icon: <div data-testid="mock-icon"></div>,
		};

		render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
		expect(screen.getByTestId("internal-link")).toBeInTheDocument();
	});

	it("applies button-link class when label is provided", () => {
		const props = {
			label: "Button Label",
			path: "/button-link",
			icon: <div>Icon</div>,
		};

		render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		const linkElement = screen.getByTestId("internal-link");
		expect(linkElement).toHaveClass("button-link");
	});

	it("does not apply button-link class when only icon is provided", () => {
		const props = {
			path: "/icon-only",
			icon: <div data-testid="mock-icon"></div>,
		};

		render(
			<Router>
				<RoutingButton {...props} />
			</Router>
		);

		const linkElement = screen.getByTestId("internal-link");
		expect(linkElement).not.toHaveClass("button-link");
	});
});
