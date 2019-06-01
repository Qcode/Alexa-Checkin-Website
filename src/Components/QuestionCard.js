import React from 'react';
import Proptypes from 'prop-types';
import { Switch, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import EditButton from './EditButton';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container" style={{ backgroundColor: '#F3F3F3' }}>
        <EditButton editQuestion={this.props.editQuestion} />
        <Switch />
        <h6>{this.props.index}</h6>
        <p>{this.props.question}</p>
        <Button
          onClick={() =>
            this.props.history.push('/response', {
              responses:
                this.props.responses !== undefined ? this.props.responses : [],
              question: this.props.question,
            })
          }
        >
          View Responses
        </Button>
      </div>
    );
  }
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
