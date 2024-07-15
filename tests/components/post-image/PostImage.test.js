import React from "react";
import { render, screen } from "@testing-library/react";

import PostImage from "../../../src/components/post-image/PostImage";

describe("PostImage Component", () => {
	it("renders with the correct src and alt attributes", () => {
		const src = "image.jpg";
		const alt = "An image";

		render(<PostImage src={src} alt={alt} />);

		const imgElement = screen.getByRole("img");
		expect(imgElement).toHaveAttribute("src", src);
		expect(imgElement).toHaveAttribute("alt", alt);
	});

	it("renders with the clickable class when clickable prop is true", () => {
		const src = "image.jpg";
		const alt = "An image";

		render(<PostImage src={src} alt={alt} clickable />);

		const imgElement = screen.getByRole("img");
		expect(imgElement).toHaveClass("clickable-post-image");
	});

	it("renders with the regular class when clickable prop is false", () => {
		const src = "image.jpg";
		const alt = "An image";

		render(<PostImage src={src} alt={alt} />);

		const imgElement = screen.getByRole("img");
		expect(imgElement).toHaveClass("regular-post-image");
	});
});
