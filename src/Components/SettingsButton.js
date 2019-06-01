import React from 'react';
import { Fab } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import './SettingsButton.CSS';

function SettingsButton(props) {
  return (
    <Fab size="small" color="secondary" className="settings-button">
      <SettingsIcon />
    </Fab>
  );
}

export default SettingsButton;
