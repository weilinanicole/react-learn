import React from 'react'

import store from '../store'

import {getNum, GET_NUM} from '../action/index.jsx'

export default class Body extends React.Component{
    constructor(){
        super()
    }
    click(type,index){
        console.log(index)
        if(type==='+'){
            let aNum=store.getState().Click.getNum;
            aNum+=1;
             store.dispatch(getNum(aNum))
        }else if(type==='-'){
            let aNum=store.getState().Click.getNum;
            aNum-=1;
            if(aNum<0){
                return
            }
            store.dispatch(getNum(aNum))
        }
    }
    render(){
        let list=store.getState().Click.getData;
        return <div>
        {
            list&&list.map((item,index)=>{
            return <div className="box" key={index}>
                <div className="left">
                    <input type="checkbox"/>
                    <img src={item.img} alt=""/>
                </div>
                <div className="right">
                    <h2>{item.name}</h2>
                    <p>{item.production}</p>
                    <h3>￥<span>{item.price}</span></h3>
                    <li><span onClick={()=>{this.click(item.delType,index)}}>{item.delType}</span><span className='num'>{store.getState().Click.getNum}</span><span onClick={()=>{this.click(item.addType)}}>{item.addType}</span></li>
                </div>
               
            </div>
        })
        }
        </div>
    }
}