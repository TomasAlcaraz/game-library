import React from "react";
import "./BurguerButton.css";

export default function BurguerButton(props) {
  return (
    <>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-3 ${props.clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
