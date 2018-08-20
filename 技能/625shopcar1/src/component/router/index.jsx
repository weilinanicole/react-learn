import React from 'react'
import store from '../../store'
import axios from 'axios'
import {getData} from '../../action'
import {
    Link
} from 'react-router-dom'
export default class Body extends React.Component{
    constructor(){
        super()
    }
    //得到总数据
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            //将总数据存入到store中
            store.dispatch(getData(res.data))
        })
        .catch()
    }
    //单选框的状态--->用每一项判断
    soloCheck(index,list){
        list.list[index].checked=!list.list[index].checked;
        if(list.list[index].checked){
            this.sum(list)
        }else{
            this.sum(list)
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
    clickType(index,type,list){
        if(type==='+'){
            list.list[index].num+=1; 
            this.sum(list)
        }else if(type==='-'){
            if(list.list[index].num<=0){
                return 
            }else{
                list.list[index].num-=1; 
                this.sum(list)
            }
        }
        store.dispatch(getData(list))
    }
    //计算总价
    sum(list){
        list.sumPrice=0;
        for(let i=0;i<list.list.length;i++){
            if(list.list[i].checked){
                list.sumPrice+=(list.list[i].price)*(list.list[i].num)
            }
        }
        store.dispatch(getData(list))
    }
    render(){
        //得到总数据中的list列表
        let list=store.getState().getData.getData&&store.getState().getData.getData.list;
        let sumData=store.getState().getData.getData&&store.getState().getData.getData;
        return <div>
            {
                list&&list.map((item,index)=>{
                    return <div className='box' key={index}>
                        <input type="checkbox" checked={item.checked} onClick={()=>{this.soloCheck(index,sumData)}}/>
                        {/* 点击图片会跳转到详情页 */}
                        <Link to={`/detail/${index}`}><img src={item.img} alt=""/></Link>
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.production}</li>
                            <li>￥<span>{item.price}</span></li>
                        </ul>
                        <ol>
                            {/* 点击时将当前点击项的下标，和类型还有总得数据传给调用的函数 */}
                            <span onClick={()=>{this.clickType(index,'+',sumData)}}>+</span>
                            <em>{item.num}</em>
                            <span onClick={()=>{this.clickType(index,'-',sumData)}}>-</span>
                        </ol>
                    </div>
                })
            }
        </div>
    }
}