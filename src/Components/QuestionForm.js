import React from 'react';
import Proptypes from 'prop-types';
import AddButton from './AddButton';

import QuestionCard from './QuestionCard';
import NewQuestionCard from './NewQuestionCard';
import './QuestionForm.css';

import './QuestionForm.css'

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  render() {
    return (
      <div className="container container-form">
        <NewQuestionCard
          open={this.state.open}
          handleModal={this.handleModal}
          setQuestion={this.props.setQuestion}
        />
        <AddButton handleModal={this.handleModal} />
        <h1>Active Questions - {this.props.setName}</h1>
        <h1 className="activeQuestions">Active Questions - {this.props.setName}</h1>
        {
          this.props.questions.map((question, index) => (
            <QuestionCard
              editQuestion={this.props.editQuestion}
              question={question.question}
              responses={question.responses}
              index={index + 1}
            />
          ))
        }
      </div >
    );
  }
}

QuestionForm.propTypes = {
  questions: Proptypes.arrayOf(Proptypes.string),
};

export default QuestionForm;
