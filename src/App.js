import React, { Component } from 'react';
import Subject from './components/Subject';
import Contents from './components/Contents';
import Toc from './components/Toc';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'welcome',
      subject:{title: "web", sub: "welcome to world wide web!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText Markup Language"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScipt", desc:"JavaScript is for interactive"}
      ]
    }
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
          <Toc data={this.state.contents}></Toc>
          <Contents title="HTML" desc="HTML is HyperText Markup Languages"></Contents>
        </header>

      </div>
    );
  }
}

export default App;
