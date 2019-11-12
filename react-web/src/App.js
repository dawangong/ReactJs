import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
// import { Link }from 'react-router-dom';

class App extends Component {
    render() {
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
            {/*<Link to="/test">test</Link>*/}
          </header>
        </div>
      );
    }
}

export default App;
