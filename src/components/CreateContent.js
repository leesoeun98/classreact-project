import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post">
                    <p><input type="text" placeholder="title" name="title" ></input></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <p><button type="submit">submit</button></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;