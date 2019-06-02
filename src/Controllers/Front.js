import React from 'react';
import QuestionForm from '../Components/QuestionForm';
import Pager from '../Components/Pager';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setNames: [],
      questionSets: {},
      currentQuestion: 0,
      error: null,
      readyForRender: false,
    };
    this.getAllSetNames().then(setNames => this.getQuestionSets(setNames));
    this.setQuestion = this.setQuestion.bind(this);
    this.editQuestion = this.editQuestion.bind(this);
    this.increaseQuestion = this.increaseQuestion.bind(this);
    this.decreaseQuestion = this.decreaseQuestion.bind(this);
  }

  decreaseQuestion(question) {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion - 1,
    }));
  }

  increaseQuestion(question) {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
    }));
  }

  getQuestionSets(setNames) {
    setNames.forEach(setName =>
      fetch(
        'http://alexa-checkin-server-node.b8qmr9pfbm.us-east-1.elasticbeanstalk.com/questions?setName=' +
        setName,
      )
        .then(questions => questions.json())
        .then(jsonResponse => {
          this.setState(prevState => ({
            questionSets: {
              ...prevState.questionSets,
              [jsonResponse.setName]: jsonResponse,
            },
            readyForRender: true,
          }));
        })
        .catch(err => this.setState({ error: 'error :(' })),
    );
  }

  getAllSetNames() {
    return fetch(
      'http://alexa-checkin-server-node.b8qmr9pfbm.us-east-1.elasticbeanstalk.com/questions',
    )
      .then(setNames => setNames.json())
      .then(setNames => {
        this.setState({ setNames: setNames });
        return setNames;
      });
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
            ...filteredQuestions,
            {
              question: values.question,
              responses: values.responses,
              id: values.id,
            },
          ],
        }),
      },
    )
      .then(questions =>
        this.setState({
          questions: [
            ...filteredQuestions,
            {
              question: values.question,
              responses: values.responses,
              id: values.id,
            },
          ],
        }),
      )
      .then(jsonResponse => {
        this.setState({ questions: jsonResponse.questions });
      });
  }

  render() {
    const setName = this.state.setNames[this.state.currentQuestion];
    const response = this.state.readyForRender ? (
      <div>
        <Pager
          currentQuestion={this.state.currentQuestion}
          setName={setName}
          numberOfSets={this.state.setNames.length}
          increaseQuestion={this.increaseQuestion}
          decreaseQuestion={this.decreaseQuestion}
        />
        <QuestionForm
          setQuestion={this.setQuestion}
          questions={
            this.state.questionSets[
              this.state.setNames[this.state.currentQuestion]
            ].questions
          }
          setName={setName}
          editQuestion={this.editQuestion}
        />
      </div>
    ) : null;
    return response;
  }
}

export default Front;
