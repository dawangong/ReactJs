import './App.scss';
// import { Button } from 'antd';
import Button from 'antd/es/button';
import React, { Component } from 'react';
import logo from './assets/images/logo.svg';

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
            <Button>111</Button>
          </header>
        </div>
      );
    }
}

export default App;
