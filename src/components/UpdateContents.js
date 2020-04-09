import React, { Component } from 'react';

{/* 1. Toc에서 선택한, selected_id와 해당 title, desc를 인자로 먼저 받아서 띄운다. 
    -> 이걸위해 App에서 updatecontent component에 data={_content}를 준 것이다.
    value={this.props.data.title} 이렇게 쓰면 선택한 content의 title이 넣어진다.

    허나 이때, value값은 props라 수정을 못하므로...state로 바꿔줘야함...그래서 constructor필요
    -> 여전히 수정불가....input값이 바뀌면 state값을 바꿔야함 (즉, setstate함수통해서)
    update의 title부분에서 setstate해야 동적으로 바뀜
    (App의 setstate는 최종적으로 바뀐 title로 state값 바꾸는것이므로)

    2. Update에서 수정한 title, desc를 onSubmit의 인자로 넘겨서 App에서 setstate를 한다.
 */}
class UpdateContents extends Component{
    constructor(props){
        super(props);
        //update의 state값들은 props인 data에서 받아온 값들로 초기화해야하므로 
        this.state={
            title:this.props.data.title,
            desc:this.props.data.desc
        }
    }
    render(){
        return(
            <article>
                <h2>Update</h2>
                <form action="/update" method="post" 
                onSubmit={function(e){
                    e.preventDefault();
                    //이 onSubmit에서는 제출시 App에서 setstate해주는 부분이므로
                    //바꾼 인자를 줘야함
                    //this.props.onSubmit(title, desc);
                }.bind(this)}>
                    <p><input type="text" name="title" value={this.state.title}
                    onChange={function(e){
                        this.setState({
                            title:e.target.value
                        });
                    }.bind(this)}></input></p>
                    <p><textarea name="desc" value={this.state.desc} 
                    onChange={function(e){
                        this.setState({
                            desc:e.target.value
                        });
                    }.bind(this)}></textarea></p>
                    <p><button type="submit">update</button></p>
                </form>
            </article>
        );
    }
}

export default UpdateContents;