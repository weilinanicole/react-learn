import React from 'react'
import store from '../../store'
import {getData} from '../../action'
export default class Header extends React.Component{
    constructor(){
        super()
    }
    click(ind){
        let list=store.getState().getData.getData&&store.getState().getData.getData;
        list.navIndex=ind
        store.dispatch(getData(list))
    }
    render(){
        let list=store.getState().getData.getData&&store.getState().getData.getData.list[0].navList;
        return <div className='header'>
            <p>最快 送至 请选择。。。》</p>
            <ul>{
                list&&list.map((item,index)=>{
                    return <li key={index} onClick={()=>{this.click(index)}}>{item.names}</li>
                })
            }</ul>
        </div>
    }
}