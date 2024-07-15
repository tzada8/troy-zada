import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import SocialIcon from "../../../src/components/social-icon/SocialIcon";

jest.mock("../../../src/components/button/RoutingButton", () => (props) => (
	<button aria-label={props.aria}>{props.icon}</button>
));

describe("SocialIcon Component", () => {
	const setup = (props = {}) => {
		return render(<SocialIcon {...props} />);
	};

	it("renders the RoutingButton with correct props", () => {
		const props = {
			link: "/path",
			icon: "test-icon",
			aria: "test-aria",
			tooltip: "test-tooltip",
		};

		setup(props);

		const button = screen.getByRole("button", { name: "test-aria" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute("aria-label", "test-aria");
	});

	it("shows and hides the tooltip on hover", () => {
		const props = {
			link: "/path",
			icon: "test-icon",
			aria: "test-aria",
			tooltip: "test-tooltip",
		};

		setup(props);

		const iconFrame = screen.getByTestId("icon-frame");
		const tooltip = screen.queryByText(/test-tooltip/i);

		expect(tooltip).toHaveAttribute("aria-hidden", "true");

		// Simulate mouse enter
		fireEvent.mouseEnter(iconFrame);
		expect(tooltip).toHaveAttribute("aria-hidden", "false");

		// Simulate mouse leave
		fireEvent.mouseLeave(iconFrame);
		expect(tooltip).toHaveAttribute("aria-hidden", "true");
	});

	it("does not render the tooltip if no tooltip prop is provided", () => {
		const props = {
			link: "/path",
			icon: "test-icon",
			aria: "test-aria",
		};

		setup(props);

		expect(screen.queryByText(/test-tooltip/i)).toBeNull();
	});
});
