import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Card.css";

export default function Card(props) {
    return (
        <div className="card-box">
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
