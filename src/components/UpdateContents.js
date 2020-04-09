import React, { Component } from 'react';

class UpdateContents extends Component{
    render(){
        return(
            <article>
                <h2>Update</h2>
                <form action="/update" method="post">
                    <p><input type="text" name="title" value=""></input></p>
                    <p><textarea name="desc" value=""></textarea></p>
                    <p><button type="submit">update</button></p>
                </form>
            </article>
        );
    }
}

export default UpdateContents;