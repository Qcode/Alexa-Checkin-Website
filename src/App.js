import React from 'react';
import { Route } from 'react-router-dom';
import Front from './Controllers/Front';
import TopNavBar from './Components/TopNavBar';
import ResponseHistory from './Components/ResponseHistory';
function App() {
  return (
    <div>
      <TopNavBar />
      <Route exact path="/" component={Front} />

      <Route exact path="/response" component={ResponseHistory} />
    </div>
  );
}

export default App;
