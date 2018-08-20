import React from 'react'

import store from '../../store'

import axios from 'axios'

import {getData} from '../../action'

import {
    Route,
    Link
} from 'react-router-dom'

export default class Body extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            store.dispatch(getData(res.data))
        })
        .catch()
    }

    //单选框的状态---->用数组将每个单项的值存起来判断
    // soloCheck(index){
    //     let list=store.getState().getData.getData
    //     list.list[index].checked=!list.list[index].checked;
    //     if(list.list[index].checked){
    //         this.sum()
    //     }else{
    //         this.sum()
    //     }
    //     let arr=[];
    //     for(let i=0;i<list.list.length;i++){
    //         if(list.list[i].checked){
    //             arr.push(list.list[i].checked)
    //         }
    //     }
    //     if(arr.length===list.list.length){
    //         list.allCheck=true
    //     }else{
    //         list.allCheck=false
    //     }
    //     store.dispatch(getData(list))
    // }
    //单选框的状态--->用每一项判断
    soloCheck(index){
        let list=store.getState().getData.getData
        list.list[index].checked=!list.list[index].checked;
        if(list.list[index].checked){
            this.sum()
        }else{
            this.sum()
        }
       
        for(let i=0;i<list.list.length;i++){
            if(list.list[i].checked){
                list.allCheck=true
            }else{
                list.allCheck=false
            }
        }
        store.dispatch(getData(list))
    }

    //加加减减
    clickType(index,type){
        let list=store.getState().getData.getData;
        if(type==='+'){
            list.list[index].num+=1; 
            this.sum()
        }else if(type==='-'){
            if(list.list[index].num<=0){
                return 
            }else{
                list.list[index].num-=1; 
                this.sum()
            }
        }
        store.dispatch(getData(list))
    }

    //计算总价
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
        let list=store.getState().getData.getData&&store.getState().getData.getData.list;
        return <div>
            {
                list&&list.map((item,index)=>{
                    return <div className='box' key={index}>
                        <input type="checkbox" checked={item.checked} onClick={()=>{this.soloCheck(index)}}/>
                        <Link to={`/detail/${index}`}><img src={item.img} alt=""/></Link>
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.production}</li>
                            <li>￥<span>{item.price}</span></li>
                        </ul>
                        <ol>
                            <span onClick={()=>{this.clickType(index,'+')}}>+</span>
                            <em>{item.num}</em>
                            <span onClick={()=>{this.clickType(index,'-')}}>-</span>
                        </ol>
                    </div>
                })
            }
        </div>
    }
}