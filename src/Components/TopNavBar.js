import React from 'react';
import SettingsButton from './SettingsButton';
import { Button } from '@material-ui/core';
import './TopNavBar.css';

function TopNavBar(props) {
  return (
    <div className="topnavbar">
      {/* <div className="item">
        <Button variant="contained" color="secondary">
          View History
        </Button>
      </div> */}
      <div className="item">
        <h1>InTouch</h1>
      </div>
      <div className="item">
        <SettingsButton />
      </div>
    </div>
  );
}

export default TopNavBar;
