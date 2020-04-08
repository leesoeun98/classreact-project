import React, { Component } from 'react';

{/* 
여기서는 App에서 받아온 data props를 그대로 보여주려함. 단 매번 태그 생성하기 어려우니 자동으로 생성해주자.
for문으로 data하나하나를 list 에 넣어서 push 해주기
단, 이 경우 key 필요하다.
*/}

{/* onChangePage함수에 id 인자줘야함
-> app의 함수인 onChangePage를 props로 부르되, id를 인자로 줘야함. 
-> 먼저 debugger를 입력 후 콘솔로 e를 찍어서 id를 어떻게 얻을지 생각해보면 됨. 
-> e.target이 해당 태그를 가리키는데, data-set을 보면 데이터가 넘어감*/}

class Toc extends Component{
    render(){
        let lists=[];
        const data=this.props.data;
        for(let i=0;i<data.length;i++){
            lists.push(
                <li key={data[i].id}><a href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}>{data[i].title}</a></li>
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