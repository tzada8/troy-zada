import React from "react";
import { Link } from "react-router-dom";

import Icon from "../icon/Icon";
import "./Button.css";

// TODO: Remove this component in place of making RoutingButton more dynamic (clickable icons).
export default function CloseButton(props) {
    return (
        <Link to={props.backTo}>
            <Icon image="fas fa-times" clickable />
        </Link>
    )
}
