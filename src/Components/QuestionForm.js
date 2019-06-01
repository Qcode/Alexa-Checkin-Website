import React from 'react';
import Proptypes from 'prop-types';
import AddButton from './AddButton';

import QuestionCard from './QuestionCard';

function QuestionForm(props) {
  return (
    <div className="container">
      <AddButton />
      <h1>Active Questions</h1>
      {props.questions.map((question, index) => (
        <QuestionCard question={question} index={index} />
      ))}
    </div>
  );
}

QuestionForm.propTypes = {
  questions: Proptypes.arrayOf(Proptypes.string),
};

export default QuestionForm;
