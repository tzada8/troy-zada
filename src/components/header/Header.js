import React from "react";
import { FaTimes } from "react-icons/fa";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import RoutingButton from "../button/RoutingButton";
import "./Header.css";

export default function Header(props) {
    return (
        <div className="header-container">
            <div className="header-title">
                {props.label && <h2>{props.label}</h2>}
                {props.backTo && <RoutingButton path={props.backTo} icon={<FaTimes />} />}
            </div>
            <HorizontalBar />
        </div>
    );
}
