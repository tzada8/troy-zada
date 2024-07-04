import React from "react";

import { FULL_NAME } from "../../../data/constants";

import DetailedPost from "../../detailed-post/DetailedPost";
import HorizontalBar from "../../horizontal-bar/HorizontalBar";
import RoutingButton from "../../button/RoutingButton";
import "./CreateSubcards.css";

export default function CreateSubcards(props) {
   return (
      <div className={`card-box-top ${props.isActive && "other-page-top"}`}>
         <div className="card-container">
            <div className="close-card-button">
               <RoutingButton path={props.backTo} icon="fas fa-times" />
            </div>
            <HorizontalBar light />

            <div className="card-content">
               <DetailedPost
                  label={props.content.label}
                  src={props.content.image}
                  details={`${FULL_NAME} \u00A0|\u00A0 ${props.content.date}`}
                  github={props.content.github}
               />
               {props.content.element}
            </div>

            <HorizontalBar light />
         </div>
      </div>
   );
}
