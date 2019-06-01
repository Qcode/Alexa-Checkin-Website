import React from 'react';
import { TextField, Modal, Button } from '@material-ui/core';
import { withFormik } from 'formik';

function NewQuestionCard(props) {
  return (
    <Modal open={props.open} onClose={props.handleModal}>
      <div className="container" style={{ margin: '20%' }}>
        <h2>Leave Another Question</h2>
        <TextField
          label="New Question"
          id="question"
          fullWidth
          variant="outlined"
          multiline
          onChange={props.handleChange}
          value={props.values.question}
          name="question"
        />
        <Button
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
  mapPropsToValues: () => ({
    question: '',
  }),
  handleSubmit: (values, formikBag) => {
    formikBag.props
      .setQuestion(values)
      .then(() => formikBag.setErrors({ failedSubmit: 'failed submit error' }))
      .finally(() => {
        formikBag.setSubmitting(false);
        formikBag.props.handleModal();
      });
  },
})(NewQuestionCard);
