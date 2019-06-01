import React from 'react';
import Proptypes from 'prop-types';
import { Switch } from '@material-ui/core';

function QuestionCard(props) {
  return (
    <div className="container" style={{ backgroundColor: '#F3F3F3' }}>
      <Switch />
      <h6>{props.index}</h6>
      <p>{props.question}</p>
    </div>
  );
}

QuestionCard.propTypes = {
  question: Proptypes.string,
  index: Proptypes.number,
};

QuestionCard.defaultProps = {
  question: null,
  index: null,
};

export default QuestionCard;
