import React from 'react'
import axios from 'axios'
import {getData,getIndex}from '../action'
import store from '../store'
export default class App extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5b0be9c51725f034fca4cc0f/example/twosix')
        .then((res)=>{
            store.dispatch(getData(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    click(index){
        store.dispatch(getIndex(index))
    }
    render(){
        let endNum=store.getState().getIndex.getIndex&&store.getState().getIndex.getIndex||0;
        let title=store.getState().getData.getData&&store.getState().getData.getData.title;
        let list=store.getState().getData.getData&&store.getState().getData.getData.list.slice(endNum*5,endNum*5+5);
        let len=store.getState().getData.getData&&store.getState().getData.getData.list.length;
        let every=Math.ceil(len/5);
        let arr=[];
        for(let i=0;i<every;i++){
            arr.push(i+1)
        }
        return <div className="wrap">
            <ol>
                {
                    title&&title.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>
            <div className='box'>
            {
                list&&list.map((item,index)=>{
                    return <ul key={index}>
                            <li>{item.num}</li>
                            <li>{item.time}</li>
                            <li>{item.name}</li>
                            <li>{item.id}</li>
                            <li>{item.licha}</li>
                            <li>{item.money}</li>
                            <li>{item.lirun}</li>
                            <li>{item.yee}</li>
                            <li><button type='button'>✘</button><button type='button'>✔</button></li>
                        </ul>
                })
            }
            <div className="page">
                <span>上一页</span>
                <li>{
                    arr&&arr.map((item,index)=>{
                        return <button type='button' onClick={()=>{this.click(index)}} key={index}>{item}</button>
                    })
                }
                </li> 
                <span>下一页</span>
            </div>
            </div>
        </div>
    }
}