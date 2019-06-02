import React from 'react';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import './Pager.css';

function Pager(props) {
  return (
    <div>
      {props.currentQuestion > 0 ? (
        <ArrowLeft
          className="left-arrow arrow"
          onClick={props.decreaseQuestion}
        />
      ) : null}
      <p className="pager-text">{props.setName}</p>
      {props.currentQuestion < props.numberOfSets - 1 ? (
        <ArrowRight
          className="right-arrow arrow"
          onClick={props.increaseQuestion}
        />
      ) : null}
    </div>
  );
}

export default Pager;
