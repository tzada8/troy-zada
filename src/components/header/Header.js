import React from "react";
import { IoCloseSharp } from "react-icons/io5";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import RoutingButton from "../button/RoutingButton";
import "./Header.css";

export default function Header(props) {
    return (
        <div className="header-container">
            <div className="header-title">
                {props.label && <h2>{props.label}</h2>}
                {props.backTo && <RoutingButton path={props.backTo} icon={<IoCloseSharp />} aria="Close" />}
            </div>
            <HorizontalBar />
        </div>
    );
}
