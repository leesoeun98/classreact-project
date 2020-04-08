import React, { Component } from 'react';
import Subject from './components/Subject';
import Contents from './components/Contents';
import Toc from './components/Toc';
import logo from './logo.svg';
import './App.css';
{/* 초기엔 welcome모드고, web 누르면 하단에 welcome 어쩌구가 뜨게
  -> Subject의 title 링크 누르면 (여기에 event 함수설치) mode가 welcome으로 바꾸고 contents component에 반영
-> 이때 새로 페이지를 그릴려면 render를 호출해야하고, 이를 위해선 state값을 바꿔야한다.  */}

{/* Toc에 있는 title클릭시 mode를 read로 바꾼 후 하단에 해당 desc, title같이 뜨게
-> 내가 클릭한 id에 해당하는 contente의 title, desc를 보여주면 됨*/}

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      selected_content_id:1,
      subject:{title: "web", sub: "world wide web!"},
      welcome:{title:"welcome", desc:"Hello, React!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText Markup Language"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScipt", desc:"JavaScript is for interactive"}
      ]
    }
  }
  getReadContents(){
    for(let i=0;i<this.state.contents.length;i++){
      let data=this.state.contents[i];
      if(data.id===this.state.selected_content_id){
        return data;
      }
    }
  }
  render(){
    let _title, _desc, _article, _content=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<Contents title={_title} desc={_desc}></Contents>
    }
    else if(this.state.mode==='read'){
     _content=this.getReadContents();
     console.log(_content);
     _article=<Contents title={_content.title} desc={_content.desc}></Contents>
    }
    return(
      <div className="App">
        <header className="App-header">

          <Subject title={this.state.subject.title} sub={this.state.subject.sub}
            onChangePage={function(e){
              this.setState({
               mode:'welcome'
            });
          }.bind(this)}></Subject>

          <Toc onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}>
          </Toc>

          {_article}

        </header>

      </div>
    );
  }
}

export default App;
