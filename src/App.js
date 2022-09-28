import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Hello world from Haonan Lu!
          </p>
          <a className="App-navi" href="labs/a2/index.html">Assignment 2
            HTML</a>
          <a className="App-navi" href="labs/a3/index.html">Assignment 3
            CSS</a>
          <a className="App-navi" href="tuiter/navigation.html">Tuiter</a>
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

export default App;
