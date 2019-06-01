import React from 'react';
import QuestionForm from '../Components/QuestionForm';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ['How are you?', 'How was your day?', 'Does Ross smell?'],
    };
  }
  render() {
    return <QuestionForm questions={this.state.questions} />;
  }
}

export default Front;
