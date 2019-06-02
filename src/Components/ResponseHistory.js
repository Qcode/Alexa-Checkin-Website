import React from 'react';
import './ResponseHistory.css';

function ResponseHistory(props) {
  return (
    <div className="responseContainer">
      <h1 className="questionHeading">{props.history.location.state.question}</h1>
      <table>
        {props.history.location.state.responses.map((response, index) => (
          <tr>
            <td className="dateCell"><b>{`May ${index + 1}:`}</b></td>
            <td>{` ${response}`}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ResponseHistory;
