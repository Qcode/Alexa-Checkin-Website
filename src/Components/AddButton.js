import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import './AddButton.css';

function AddButton(props) {
  return (
    <Fab size="small" color="secondary" aria-label="Add" className="add-button">
      <AddIcon />
    </Fab>
  );
}

AddButton.propTypes = {
  classes: PropTypes.shape({
    add: PropTypes.shape({
      position: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
    }),
  }).isRequired,
};
export default AddButton;
