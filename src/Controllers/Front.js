import React from 'react';
import QuestionForm from '../Components/QuestionForm';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      error: null,
    };
    this.getQuestionSets();
  }
  getQuestionSets() {
    fetch(
      'http://alexa-checkin-server-node.b8qmr9pfbm.us-east-1.elasticbeanstalk.com/questions?setName=Demo',
    )
      .then(questions => questions.json())
      .then(jsonResponse => {
        this.setState({ questions: jsonResponse.questions });
      })
      .catch(err => this.setState({ error: 'error :(' }));
  }
  render() {
    return <QuestionForm questions={this.state.questions} />;
  }
}

export default Front;
