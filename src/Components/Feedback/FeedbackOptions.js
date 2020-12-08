import React from 'react';
// import s from "./FeedbackButtons.module.css";
// import PropTypes from "prop-types";

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div className="container">
      {options.map(option => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
