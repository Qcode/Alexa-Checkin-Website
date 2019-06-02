import React from 'react';
import './ResponseHistory.css';

function ResponseHistory(props) {
  return (
    <div className="container">
      <table>
        <h3>{props.history.location.state.question}</h3>
      </table>
      {props.history.location.state.responses.map((response, index) => (
        <tr>
          <td><b>{`May ${index + 1}:`}</b></td>
          <td>{` ${response}`}</td>
        </tr>
      ))}
    </div>
  );
}

export default ResponseHistory;
