import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Hey React !</h1>
  </div>
);

const el = document.getElementById('_approot_');
ReactDOM.render(<App />, el);
