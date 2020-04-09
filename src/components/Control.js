import React, { Component } from 'react';

class Control extends Component{
    render(){
        return(
            <header>
               <ul>
                   <li><a href="#">create</a></li>
                   <li><a href="#">update</a></li>
                   <li><input type="button" value="delete"></input></li>              
                </ul>
            </header>
        );
    }
}

export default Control;