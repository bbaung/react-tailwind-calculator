import logo from './logo.svg';
import './App.css';

// ref - https://www.youtube.com/watch?v=_x8mNUBhLSk
// ref - https://www.youtube.com/watch?v=UQuWev9pais

function App() {
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

        <h1 className='text-5xl'>React Tailwind Frame</h1>
      </header>
    </div>
  );
}

export default App;
