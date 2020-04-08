import React, { Component } from 'react';
import Subject from './components/Subject';
import Contents from './components/Contents';
import Toc from './components/Toc';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <Subject></Subject>
          <Toc></Toc>
          <Contents></Contents>
        </header>

      </div>
    );
  }
}

export default App;
