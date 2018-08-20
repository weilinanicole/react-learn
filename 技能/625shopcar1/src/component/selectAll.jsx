import React from 'react'

import store from '../store'

import {getData} from '../action'

export default class selectAll extends React.Component{
    constructor(){
        super()
    }
    click(list){
        //获取的是在数据中的全选的状态
        list.allCheck=!list.allCheck;
        //循环遍历每一项，让每一项的状态都和总得全选的一样
        for(let i=0;i<list.list.length;i++){
            list.list[i].checked=list.allCheck
        }
        //调用计算总价的函数
        this.sum(list)
        //将list重新存到store中
        store.dispatch(getData(list));
    }
    sum(list){
        list.sumPrice=0;
        //循环遍历整个list数组，若是某项的选中状态为真的话，将它的单价乘以它的数量，得出总价
        for(let i=0;i<list.list.length;i++){
            if(list.list[i].checked){
                list.sumPrice+=(list.list[i].price)*(list.list[i].num)
            }
        }
        //将list重新存入到store中
        store.dispatch(getData(list))
    }
    render(){
        let list=store.getState().getData.getData;
        //总价
        let price=store.getState().getData.getData&&store.getState().getData.getData.sumPrice;
        //全选的状态
        let status=list&&list.allCheck;
        return <div className='select'>
            <li>
                <input type="checkbox" checked={status} onClick={()=>{this.click(list)}}/>
                <span>全选</span>
            </li>
            <li>
                总计：￥<span>{price}</span>元
            </li>
        </div>
    }
}