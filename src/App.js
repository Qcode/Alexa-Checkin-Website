import React from 'react';
import { Route } from 'react-router-dom';
import Front from './Controllers/Front';
import TopNavBar from './Components/TopNavBar';

function App() {
  return (
    <div>
      <TopNavBar />
      <Route exact path="/" component={Front} />
    </div>
  );
}

export default App;
