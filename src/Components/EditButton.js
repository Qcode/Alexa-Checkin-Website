import React from 'react';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Create';
import PropTypes from 'prop-types';
import './EditButton.css';

function EditButton(props) {
  return (
    <Fab
      onClick={props.handleModal}
      size="small"
      color="secondary"
      className="edit-button"
    >
      <EditIcon />
    </Fab>
  );
}

export default EditButton;
