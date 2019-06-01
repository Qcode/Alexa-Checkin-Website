import React from 'react';
import QuestionForm from '../Components/QuestionForm';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setName: null,
      questions: [],
      error: null,
    };
    this.getQuestionSets();
    this.setQuestion = this.setQuestion.bind(this);
    this.editQuestion = this.editQuestion.bind(this);
  }

  getQuestionSets() {
    fetch(
      'http://alexa-checkin-server-node.b8qmr9pfbm.us-east-1.elasticbeanstalk.com/questions?setName=Demo',
    )
      .then(questions => questions.json())
      .then(jsonResponse => {
        this.setState({
          questions: jsonResponse.questions,
          setName: jsonResponse.setName,
        });
      })
      .catch(err => this.setState({ error: 'error :(' }));
  }

  setQuestion(values) {
    return fetch(
      'http://alexa-checkin-server-node.b8qmr9pfbm.us-east-1.elasticbeanstalk.com/questions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          setName: this.state.setName,
          questions: [
            ...this.state.questions,
            {
              question: values.question,
              responses: [],
              id: 'something',
            },
          ],
        }),
      },
    )
      .then(questions => questions.json())
      .then(jsonResponse => {
        this.setState({ questions: jsonResponse.questions });
      });
  }

  editQuestion(values) {
    const filteredQuestions = this.state.questions.filter(
      i => i.question !== values.question,
    );
    return fetch(
      'http://alexa-checkin-server-node.b8qmr9pfbm.us-east-1.elasticbeanstalk.com/questions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          setName: this.state.setName,
          questions: [
            filteredQuestions,
            {
              question: values.question,
              responses: [],
              id: 'something',
            },
          ],
        }),
      },
    )
      .then(questions => questions.json())
      .then(jsonResponse => {
        this.setState({ questions: jsonResponse.questions });
      });
  }

  render() {
    return (
      <QuestionForm
        setQuestion={this.setQuestion}
        questions={this.state.questions}
        editQuestion={this.editQuestion}
      />
    );
  }
}

export default Front;
