import React, { Component } from 'react';

{/* onSubmit event에 form에 입력한 title, desc넘겨줘야함. 
    이때 입력한 title, desc는 debugger->e.target으로 찾기
    App에선 받은 인자를 바탕으로 setState해야함
 */}
class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(e.target.title.value, e.target.desc.value);
                }.bind(this)}>
                    <p><input type="text" placeholder="title" name="title" ></input></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <p><button type="submit">submit</button></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;