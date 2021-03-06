import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button
          type="button"
          className={s.btn}
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
