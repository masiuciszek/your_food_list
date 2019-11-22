import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => {
        setState(data);
      });
  }, []);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// "eslintConfig": {
//   "extends": "react-app"
// },
export default App;
