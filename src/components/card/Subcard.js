import React from "react";

import { FULL_NAME } from "../../data/constants";

import Card from "./Card";
import DetailedPost from "../detailed-post/DetailedPost";

export default function Subcard(props) {
    return (
        <Card label={props.label} backTo={props.backTo}>
            <DetailedPost
                label={props.label}
                src={props.image}
                details={`${FULL_NAME} \u00A0|\u00A0 ${props.date}`}
                github={props.github}
            />
            <br />
            {props.children}
        </Card>
    );
}
