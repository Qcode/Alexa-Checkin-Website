import React from 'react';
import Proptypes from 'prop-types';
import { Switch, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import EditButton from './EditButton';
import EditQuestionCard from './EditQuestionCard';
import HistoryIcon from '@material-ui/icons/Create';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    return (
      <div className="container" style={{ backgroundColor: '#F3F3F3' }}>
        <EditButton handleModal={this.handleModal} />
        <EditQuestionCard
          handleModal={this.handleModal}
          editQuestion={this.props.editQuestion}
          open={this.state.open}
        />
        {/* <Switch /> */}
        <h6>{this.props.index}</h6>
        <p className="questionCardQuestion">{this.props.question}</p>
        <Button
          onClick={() =>
            this.props.history.push('/response', {
              responses:
                this.props.responses !== undefined ? this.props.responses : [],
              question: this.props.question,
            })
          }
        >
          responses
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
