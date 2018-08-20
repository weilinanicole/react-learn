import React from 'react'
import {Link} from 'react-router-dom'
import store from '../../store'
import {getData,isLogin} from '../../action'
export default class Footer extends React.Component{
    constructor(){
        super()
    }
    click(){
        let isShow=store.getState().getData.getData&&store.getState().getData.getData;
        isShow.shopBox=!isShow.shopBox;
        store.dispatch(getData(isShow))
    }
    clickNum(index,type){
        let list=store.getState().getData.getData&&store.getState().getData.getData;
       let ind=store.getState().getData.getData&&store.getState().getData.getData.navIndex;
       if(type==='+'){
        list.list[0].navList[ind].items[index].num+=1;
       }else{
           if(list.list[0].navList[ind].items[index].num<=0){
               return
           }
            list.list[0].navList[ind].items[index].num-=1;
       }
       store.dispatch(getData(list))
    }
    render(){
        let isShow=store.getState().getData.getData&&store.getState().getData.getData.shopBox;
        let ind=store.getState().getData.getData&&store.getState().getData.getData.navIndex;
        let cont=store.getState().getData.getData&&store.getState().getData.getData.list[0].navList;
        let arr=[];
        for(let i in cont){
            arr.push(cont[i])
        }
        let newArr=[];
        let sumNum=0;
        let sumPrice=0;
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].items.length;j++){
                if(arr[i].items[j].num>0){
                    newArr.push(arr[i].items[j])
                    sumNum+=arr[i].items[j].num
                }
            }
        }
        for(let i=0;i<newArr.length;i++){
            sumPrice+=newArr[i].num*newArr[i].price
        }
        let isLogin=store.getState().isLogin.isLogin;
        return <div className='footer'>
            <Link to='/home/main'>主页</Link>
            <div onClick={()=>{this.click()}}>购物袋</div>
            {
                isShow?<div className='mask'> 
                            <div className='innerBox'>
                                <p>小伙伴，选购商品满90元起送哦</p>
                                {
                                newArr.map((item,index)=>{
                                    return <ul key={index}>
                                        <li>{item.title}</li>
                                        <li><span onClick={()=>{this.clickNum(index,'-')}}>-</span><span>{item.num}</span><span onClick={()=>{this.clickNum(index,'+')}}>+</span></li>
                                    </ul>
                                })}
                                <ol>
                                    <li><span>{sumNum}</span>盒商品</li>
                                    <li><em>合计：￥<span>{sumPrice}</span></em><button type='button'>结算</button></li>
                                </ol>
                            </div>
                        </div>:null
                       
                }
                <Link to='/home/my' onClick={()=>{this.LinkClick()}}>我的</Link>
        </div>
    }
}