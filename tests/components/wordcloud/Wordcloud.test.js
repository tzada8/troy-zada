import React from "react";
import { render, screen } from "@testing-library/react";

import Wordcloud from "../../../src/components/wordcloud/Wordcloud";

jest.mock("react-d3-cloud", () => (props) => (
	<div data-testid="word-cloud">
		{props.data.map((word) => (
			<div
				key={word.text}
				data-word={word.text}
				data-value={word.value}
				data-category={word.category}
				style={{
					fontWeight: props.fontWeight(word),
					fontSize: props.fontSize(word),
					fill: props.fill(word),
				}}
			>
				{word.text}
			</div>
		))}
	</div>
));

describe("Wordcloud Component", () => {
	const mockData = [
		{ text: "word1", value: 10, category: "high" },
		{ text: "word2", value: 20, category: "highest" },
	];

	beforeAll(() => {
		document.documentElement.style.setProperty("--BODY-FONT", "Arial");
		document.documentElement.style.setProperty("--BLUE", "#0000FF");
		document.documentElement.style.setProperty("--DARK-BLUE", "#0000A0");
		document.documentElement.style.setProperty("--BLACK", "#000000");
		document.documentElement.style.setProperty("--GREY", "#808080");
	});

	it("renders without crashing", () => {
		render(<Wordcloud data={mockData} />);
		expect(screen.getByTestId("word-cloud")).toBeInTheDocument();
	});
});
