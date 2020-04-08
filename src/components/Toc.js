import React, { Component } from 'react';

{/* 
여기서는 App에서 받아온 data props를 그대로 보여주려함. 단 매번 태그 생성하기 어려우니 자동으로 생성해주자.
for문으로 data하나하나를 list 에 넣어서 push 해주기
단, 이 경우 key 필요하다.
*/}

class Toc extends Component{
    render(){
        let lists=[];
        const data=this.props.data;
        for(let i=0;i<data.length;i++){
            lists.push(
                <li key={data[i].id}><a href={"}/content/"+data[i].id}>{data[i].title}</a></li>
            )
        }            
        return(
            <nav>
                <ul>
                    {lists}
                </ul>

            </nav>
        )
    }
}

export default Toc;