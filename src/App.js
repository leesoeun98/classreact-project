import React, { Component, createContext } from 'react';
import Subject from './components/Subject';
import ReadContents from './components/ReadContents';
import Control from './components/Control';
import UpdateContents from './components/UpdateContents';
import CreateContent from './components/CreateContent';
import Toc from './components/Toc';
import logo from './logo.svg';
import './App.css';
{/* 초기엔 welcome모드고, web 누르면 하단에 welcome 어쩌구가 뜨게
  -> Subject의 title 링크 누르면 (여기에 event 함수설치) mode가 welcome으로 바꾸고 contents component에 반영
-> 이때 새로 페이지를 그릴려면 render를 호출해야하고, 이를 위해선 state값을 바꿔야한다.  */}

{/* Toc에 있는 title클릭시 mode를 read로 바꾼 후 하단에 해당 desc, title같이 뜨게
-> 내가 클릭한 id에 해당하는 contente의 title, desc를 보여주면 됨*/}

{/* delete할 경우 id받아와서 복사본에 해당하는 content삭제하고 복사본으로 setstate
*/}

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state={
      mode:'welcome',
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
  getContents(){
    let _title, _desc, _article, _content=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContents title={_title} desc={_desc}></ReadContents>
    }
    else if(this.state.mode==='read'){
     _content=this.getReadContents();
     _article=<ReadContents title={_content.title} desc={_content.desc}></ReadContents>
    }
    else if (this.state.mode==='create'){
      _article=<CreateContent onSubmit={function(newtitle, newdesc){
        this.max_content_id=this.max_content_id+1;
        let _contents=Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:newtitle, desc:newdesc});
       this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    }
    else if(this.state.mode==='update'){
      //이 _content는 내가 선택한 data 1개고 (update에 넘겨줄)
      _content=this.getReadContents();
      _article=<UpdateContents data={_content} 
      onSubmit={function(updateid, updatetitle,updatedesc){
        //이 _contents는 state로서의 contents 복사본으로 모든 원소를 가짐
        // 복사본의 특정 원소를 수정하고 그걸로 setstate하려는 것
        let _contents=Array.from(this.state.contents);
        for(let i=0;i<_contents.length;i++){
          if(_contents[i].id===updateid){
            _contents[i]={id:updateid, title:updatetitle, desc:updatedesc}
          }
        }
        this.setState({
          contents:_contents,
          mode:'read'
           });
      }.bind(this)}
    ></UpdateContents>
    }
    return _article;
  }
  render(){
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

          <Control onChangeMode={function(_mode){
            if(_mode==='delete'){
              if(window.confirm('really?')){
                let _contents=Array.from(this.state.contents); 
                for(let i=0;i<_contents.length;i++){
                  if(_contents[i].id===this.state.selected_content_id){
                    _contents.splice(i,1);
                    break;
                  }
                }
                this.setState({
                 mode:'welcome',
                 contents:_contents
                });
                alert('deleted!');
              }
            }else{
              this.setState({mode:_mode});
            }
          }.bind(this)}>
          </Control>

          {this.getContents()}

        </header>

      </div>
    );
  }
}

export default App;
