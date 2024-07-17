import React from "react";

import "./SkillsBlock.css";

export default function SkillsBlock(props) {
    return (
        <div className="skills-block">
            {props.data.map(s => (
                <div key={s.label} className="skill-container">
                    <p className="skill-content">
                        <img src={s.image} className="skill-image" alt={s.label} />
                        {s.label}
                    </p>
                </div>
            ))}
        </div>
    );
}
