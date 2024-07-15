import React from "react";
import { render } from "@testing-library/react";

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
		const { getByTestId } = render(<Wordcloud data={mockData} />);
		expect(getByTestId("word-cloud")).toBeInTheDocument();
	});

	it("sets the font and colors correctly from CSS variables", () => {
		const { getByTestId } = render(<Wordcloud data={mockData} />);
		const wordCloud = getByTestId("word-cloud");
		const firstWord = wordCloud.firstChild;

		expect(firstWord.style.fill).toBe("#0000A0");
	});

	it("passes the correct props to the WordCloud component", () => {
		const { getByTestId } = render(<Wordcloud data={mockData} />);
		const wordCloud = getByTestId("word-cloud");
		const firstWord = wordCloud.firstChild;

		expect(wordCloud.childElementCount).toBe(mockData.length);
		expect(firstWord.textContent).toBe(mockData[0].text);
		expect(firstWord.style.fontWeight).toBe("600");
		expect(firstWord.style.fontSize).toBeTruthy();
	});

	it("correctly applies font weight based on category", () => {
		const { getByTestId } = render(<Wordcloud data={mockData} />);
		const wordCloud = getByTestId("word-cloud");
		const firstWord = wordCloud.firstChild;
		const secondWord = wordCloud.children[1];

		expect(firstWord.style.fontWeight).toBe("600");
		expect(secondWord.style.fontWeight).toBe("600");
	});

	it("correctly calculates font size based on value", () => {
		const { getByTestId } = render(<Wordcloud data={mockData} />);
		const wordCloud = getByTestId("word-cloud");
		const firstWord = wordCloud.firstChild;
		const secondWord = wordCloud.children[1];

		const firstWordFontSize = parseFloat(firstWord.style.fontSize);
		const secondWordFontSize = parseFloat(secondWord.style.fontSize);

		expect(secondWordFontSize).toBeGreaterThan(firstWordFontSize);
	});
});
