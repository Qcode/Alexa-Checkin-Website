import React from 'react';
import Proptypes from 'prop-types';
import { Switch, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

function QuestionCard(props) {
  return (
    <div className="container" style={{ backgroundColor: '#F3F3F3' }}>
      <Switch />
      <h6>{props.index}</h6>
      <p>{props.question}</p>
      <Button
        onClick={() =>
          props.history.push('/response', {
            responses: props.responses !== undefined ? props.responses : [],
            question: props.question,
          })
        }
      >
        View Responses
      </Button>
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
  responses: [],
};

export default withRouter(QuestionCard);
