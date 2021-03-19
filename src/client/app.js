import { render } from 'react-dom';

export const App = () => (
  <div>
    <h1>Hey There</h1>
  </div>
);

(global || window).startApp = () => {
  const el = document.getElementById('__root');
  render(<App />, el);
};
