import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {
                    "leftPath":'/img/eleft.png',
                    "rightPath":'/img/eright.png',
                    "leftIsShow":false,
                    "rightIsShow":false,
                    "all":false
                },
                {
                    "leftPath":'/img/eleft.png',
                    "rightPath":'/img/eright.png',
                    "leftIsShow":false,
                    "rightIsShow":false
                },
                {
                    "leftPath":'/img/eleft.png',
                    "rightPath":'/img/eright.png',
                    "leftIsShow":false,
                    "rightIsShow":false,
                    "all":false
                },
                {
                    "leftPath":'/img/eleft.png',
                    "rightPath":'/img/eright.png',
                    "leftIsShow":false,
                    "rightIsShow":false,
                    "all":false
                },
                {
                    "leftPath":'/img/eleft.png',
                    "rightPath":'/img/eright.png',
                    "leftIsShow":false,
                    "rightIsShow":false,
                    "all":false
                }
            ],
            num:0
        }
    }
    leftClick(index){
        let list=this.state.list;
        let num=this.state.num;
        let all=this.state.all;

        list[index].leftIsShow=!list[index].leftIsShow;
        if(list[index].leftIsShow){
            list[index].leftPath='/img/left.png'
        }else{
            list[index].leftPath='/img/eleft.png'
        }


        if(list[index].leftIsShow&&list[index].rightIsShow){
            num+=1;
        }else if(!list[index].leftIsShow&&!list[index].rightIsShow){
            num-=1;
        }
        this.setState({
            list,
            num
        })
    }
    rightClick(index){
        let list=this.state.list;
        let num=this.state.num;
        let all=this.state.all;

        list[index].rightIsShow=!list[index].rightIsShow;
        if(list[index].rightIsShow){
            list[index].rightPath='/img/right.png'
        }else{
            list[index].rightPath='/img/eright.png'
        }

        if(list[index].leftIsShow&&list[index].rightIsShow){
            num+=1;
        }else if(!list[index].leftIsShow&&!list[index].rightIsShow){
            num-=1;
        }
        this.setState({
            list,
            num
        })
    }
    render(){
        return <div className="wrap">
            {
                this.state.list.map((item,index)=>{
                    return <li key={index}>
                        <img src={item.leftPath} alt="" onClick={()=>{this.leftClick(index)}}/>
                        <img src={item.rightPath} alt="" onClick={()=>{this.rightClick(index)}}/>
                    </li>
                })
            }
            <p>{this.state.num}</p>
        </div>
    }
}