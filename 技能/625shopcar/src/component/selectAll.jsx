import React from 'react'

import store from '../store'

import {getData} from '../action'

export default class selectAll extends React.Component{
    constructor(){
        super()
    }
    click(){
        let list=store.getState().getData.getData;
        list.allCheck=!list.allCheck;
        for(let i=0;i<list.list.length;i++){
            list.list[i].checked=list.allCheck
        }
        this.sum()
        store.dispatch(getData(list));
    }
    sum(){
        let list=store.getState().getData.getData;
        list.sumPrice=0;
        for(let i=0;i<list.list.length;i++){
            if(list.list[i].checked){
                list.sumPrice+=(list.list[i].price)*(list.list[i].num)
            }
        }
        store.dispatch(getData(list))
    }
    render(){
        let list=store.getState().getData.getData;
        //总价
        let price=store.getState().getData.getData&&store.getState().getData.getData.sumPrice
        let status=list&&list.allCheck;
        return <div className='select'>
            <li>
                <input type="checkbox" checked={status} onClick={()=>{this.click()}}/>
                <span>全选</span>
            </li>
            <li>
                总计：￥<span>{price}</span>元
            </li>
        </div>
    }
}