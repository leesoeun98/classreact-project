import React, { Component } from 'react';
import Subject from './components/Subject';
import Contents from './components/Contents';
import Toc from './components/Toc';
import logo from './logo.svg';
import './App.css';
{/* 초기엔 welcome모드고, web 누르면 하단에 welcome 어쩌구가 뜨게
  -> Subject의 title 링크 누르면 mode가 welcome으로 바꾸고 contents component에 반영
-> 이때 새로 페이지를 그릴려면 render를 호출해야하고, 이를 위해선 state값을 바꿔야한다.  */}

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'welcome',
      subject:{title: "web", sub: "world wide web!"},
      welcome:{title:"welcome", desc:"Hello, React!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText Markup Language"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScipt", desc:"JavaScript is for interactive"}
      ]
    }
  }
  render(){
    let _title, _desc, _article=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }
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
