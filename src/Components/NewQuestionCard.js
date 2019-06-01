import React from 'react';
import { TextField, Modal } from '@material-ui/core';

function NewQuestionCard(props) {
  return (
    <Modal>
      <div className="container">
        <TextField label="New Question" id="question" />
      </div>
    </Modal>
  );
}

export default NewQuestionCard;
