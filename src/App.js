import React from 'react';
import { Route } from 'react-router-dom';
import Front from './Controllers/Front';

function App() {
  return (
    <div>
      <Route exact path="/" component={Front} />
    </div>
  );
}

export default App;
