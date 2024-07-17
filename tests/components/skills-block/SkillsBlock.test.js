import React from "react";
import { render, screen } from "@testing-library/react";

import SkillsBlock from "../../../src/components/skills-block/SkillsBlock";

describe("SkillsBlock Component", () => {
	const testData = [
		{ label: "JavaScript", image: "javascript.png" },
		{ label: "React", image: "react.png" },
		{ label: "CSS", image: "css.png" },
	];

	it("renders skills correctly", () => {
		render(<SkillsBlock data={testData} />);

		testData.forEach((skill) => {
			const skillElement = screen.getByText(skill.label);
			expect(skillElement).toBeInTheDocument();
		});

		const skillImages = screen.getAllByAltText(/.*/);
		skillImages.forEach((img, index) => {
			expect(img).toHaveAttribute("src", testData[index].image);
			expect(img).toHaveAttribute("alt", testData[index].label);
		});
	});

	it("renders correct number of skills", () => {
		render(<SkillsBlock data={testData} />);
		const skillContainers = screen.getAllByTestId("skill-container");
		expect(skillContainers.length).toBe(testData.length);
	});
});
