import React from 'react';
import { TextField, Modal, Button } from '@material-ui/core';
import { withFormik } from 'formik';
import './EditQuestionCard.css';

function EditQuestionCard(props) {
  return (
    <Modal open={props.open} onClose={props.handleModal}>
      <div className="editContainer" style={{ margin: '20%' }}>
        <h2 className="editHeading">Edit Your Question</h2>
        <TextField
          label="Edit Question"
          id="question"
          fullWidth
          variant="outlined"
          multiline
          onChange={props.handleChange}
          value={props.values.question}
          name="question"
        />
        <Button
          className="submitButton"
          color="secondary"
          variant="contained"
          onClick={props.handleSubmit}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
}

export default withFormik({
  mapPropsToValues: props => ({
    question: props.question,
    id: props,
  }),
  handleSubmit: (values, formikBag) => {
    formikBag.props
      .editQuestion(values)
      .then(() => formikBag.setErrors({ failedSubmit: 'failed submit error' }))
      .finally(() => {
        formikBag.setSubmitting(false);
        formikBag.props.handleModal();
      });
  },
})(EditQuestionCard);
