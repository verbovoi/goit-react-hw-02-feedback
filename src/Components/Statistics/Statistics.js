import React from 'react';
import s from './Statistics.module.css';
// import PropTypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className="container">
      <ul className={s.border}>
        <li className="item">Good: {good}</li>
        <li className="item">Neutral: {neutral}</li>
        <li className="item">Bad: {bad}</li>
        <li className="item">Total Feedbacks: {total()}</li>
        <li className="item">
          Positive Feedback Percentage: {positivePercentage()}%
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
