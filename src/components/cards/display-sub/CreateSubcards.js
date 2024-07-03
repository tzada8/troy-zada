import React from "react";

import { FULL_NAME } from "../../../data/constants";

import DetailedPost from "../../detailed-post/DetailedPost";
import HorizontalBar from "../../horizontal-bar/HorizontalBar";
import RoutingButton from "../../button/RoutingButton";
import "./CreateSubcards.css";

// CREATES CARD FRAME WITH APPROPRIATE CONTENT
function CreateSubcards(props) {
   return (
      <div
         className={
            props.isActive ? "card-box-top other-page-top" : "card-box-top"
         }
      >
         <div className="card-container">
            {/* HEADER FOR BACK TO PREVIOUS PAGE */}
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

export default CreateSubcards;
