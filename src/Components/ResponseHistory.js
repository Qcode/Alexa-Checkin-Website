import React from 'react';

function ResponseHistory(props) {
  return (
    <div className="container">
      <h3>{props.history.location.state.question}</h3>
      {props.history.location.state.responses.map((response, index) => (
        <p>
          <b>{`May ${index + 1}:`}</b>
          {` ${response}`}
        </p>
      ))}
    </div>
  );
}

export default ResponseHistory;
