import React, { useEffect, useState } from "react";
import WordCloud from "react-d3-cloud";

import "./Wordcloud.css";

export default function Wordcloud(props) {
    const [font, setFont] = useState("");
    const [colors, setColors] = useState({});

    const boldedCategories = ["highest", "high"];
    const minFontSize = 12;
    const maxFontSize = 26;

    const maxVal = Math.max(...props.data.map(v => v.value));
    const minVal = Math.min(...props.data.map(v => v.value));

    const fontSizeScaling = (val) => {
        const normalizedFrequency = (val - minVal) / (maxVal - minVal);
        return minFontSize + normalizedFrequency * (maxFontSize - minFontSize);
    }

    useEffect(() => {
        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);
        const fontStyle = computedStyle.getPropertyValue("--BODY-FONT").trim();
        const cols = {
            highest: computedStyle.getPropertyValue("--BLUE").trim(),
            high: computedStyle.getPropertyValue("--DARK-BLUE").trim(),
            medium: computedStyle.getPropertyValue("--DARK-BLUE").trim(),
            low: computedStyle.getPropertyValue("--BLACK").trim(),
            lowest: computedStyle.getPropertyValue("--GREY").trim(),
        };

        setFont(fontStyle);
        setColors(cols);
    }, []);

    return (
        <div className="wordcloud">
            <WordCloud
                data={props.data}
                width={550}
                height={200}
                font={font}
                fontWeight={(word) => boldedCategories.includes(word.category) ? 600 : 400}
                fontSize={(word) => fontSizeScaling(word.value)}
                rotate={() => 0}
                spiral="rectangular"
                padding={2}
                random={() => 0.5}
                fill={(d) => colors[d.category]}
            />
        </div>
    );
}
