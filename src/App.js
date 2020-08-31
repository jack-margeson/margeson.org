import React from 'react';
import './App.css';
import { ProgressBar } from 'react-mdl';

function App() {
  // Adds the "main" class to the body of the app.
  document.body.classList.add('main');
  return (
    <div className="main">
      <span>Coming... soonish!</span>
      <ProgressBar indeterminate />
    </div>
  );
}

export default App;
