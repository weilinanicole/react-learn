import React from 'react'

import List from './list.jsx'

import style from './css/style.css'

export default class Chart extends React.Component{
    constructor(){
        super()
    }
    state={
        sumCheck:false,
        sumPrice:0,
        list:[{
            id:0,
            isChecked:false,
            num:0,
            name:'苹果',
            price:10
        },{
            id:1,
            isChecked:false,
            num:0,
            name:'香蕉',
            price:20
        },{
            id:2,
            isChecked:false,
            num:0,
            name:'梨',
            price:30
        },{
            id:3,
            isChecked:false,
            num:0,
            name:'菠萝',
            price:40
        },{
            id:4,
            isChecked:false,
            num:0,
            name:'桃子',
            price:50
        }]
    }

    //点击全选，所有的都被选中
    checkAll(){
        let list=this.state.list
        this.setState({
            sumCheck:!this.state.sumCheck
        })
        list.forEach((item)=>{
            item.isChecked=!this.state.sumCheck
        })  
        this.setState({
            list
        }),
        ()=>{
            this.countSum()
        }
    }

    //每个的checkbox的选中状态
    childCheck(id,status){
        let list=this.state.list;
        list[id].isChecked=!list[id].isChecked
        let sumCheck=false
        this.state.list.forEach((item)=>{
            if(!item.isChecked){
                 sumCheck=false
                return
            }else{
                sumCheck=true
            }
        })

        this.setState({
            list,
            sumCheck
        }),
        ()=>{
            this.countSum()
        }
    }

    //加加减减
    addDel(id,type){
        let list=this.state.list
        if(type==='+'){
            list[id].num++
        }else{
            if(list[id].num==0){
                return
            }
            list[id].num--
        }
        this.setState({
            list
        }),
        ()=>{
            this.countSum()
        }
    }

    //计算价格
    countSum(){
        let sumPrice=0;
        let list=this.state.list;
        list.forEach((item)=>{
            if(item.isChecked){
                sumPrice+=item.num*item.price
            }
        })
        this.setState({
            sumPrice
        })
    }


    render(){
        return <div>
            <List data={this.state.list} childCheck={this.childCheck.bind(this)} addDel={this.addDel.bind(this)}/>
            <div className="bottom">
                <p>全选：<input type="checkbox" checked={this.state.sumCheck} onChange={this.checkAll.bind(this)}/></p>    
                <li>总价：{this.state.sumPrice}</li>
                <li>总数量：</li>
            </div>
        </div>
    }
}