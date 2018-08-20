import React from 'react'
import {getData} from '../action'
import store from '../store'
import {Link} from 'react-router-dom'
export default class List extends React.Component{
    constructor(){
        super()
    }
    del(index){
        let list=store.getState().getData.getData&&store.getState().getData.getData;
        store.dispatch(getData(list.slice(0,list.length-1)))
        window.localStorage.item=JSON.stringify(store.getState().getData.getData)
    }
    render(){
        let list=store.getState().getData.getData&&store.getState().getData.getData;
        let stores=JSON.parse(window.localStorage.item);
        let arr=[];
        for(let i in stores){
            arr.push(stores[i])
        }
        return <div className='listBox'>{
            arr.map((item,index)=>{
                return <ul key={index}>
                    <li>
                        <span>姓名：{item.name}</span>
                        <span>密码：{item.pwd}</span>
                    </li>
                    <em onClick={()=>{this.del(index)}}>X</em>
                </ul>
            })
        }</div>
    }
}