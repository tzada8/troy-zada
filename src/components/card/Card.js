import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Card.css";

export default function Card(props) {
    const inactivePos = props.subcard ? "sub-card-inactive-pos" : "main-card-inactive-pos";

    return (
        <div className={`card-box ${inactivePos} ${props.isActive && "card-active-pos"}`}>
            <div className="card-container">
                <Header label={props.label} backTo={props.backTo} />
                <div className="card-content">
                    {props.children}
                    <Footer quote={props.quote} author={props.author} />
                </div>
            </div>
        </div>
    );
}
