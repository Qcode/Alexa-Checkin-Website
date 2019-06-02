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
          fontSize="large"
        />
      ) : null}
      {props.currentQuestion < props.numberOfSets - 1 ? (
        <ArrowRight
          className="right-arrow arrow"
          onClick={props.increaseQuestion}
          fontSize="large"
        />
      ) : null}
    </div>
  );
}

export default Pager;
