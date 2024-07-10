import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdConstruction, MdError } from "react-icons/md";

import Icon from "../icon/Icon";
import "./Popup.css";

export default function Popup(props) {
    const popupStyle = props.status === "success" ? {
        icon: <FaCircleCheck />, green: true, class: "success-popup",
    } : props.status === "failure" ? {
        icon: <MdError />, red: true, class: "failure-popup",
    } : props.status === "construction" ? {
        icon: <MdConstruction />, orange: true, class: "construction-popup",
    } : {};

    return props.status && (
        <div className={`submit-popup center ${popupStyle.class}`}>
            <Icon
                image={popupStyle.icon}
                green={popupStyle.green}
                red={popupStyle.red}
                orange={popupStyle.orange}
            />
            <h3>{props.label}</h3>
            <p>{props.text}</p>
        </div>
    );
}
