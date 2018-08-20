import React from 'react';
import store from '../redux/store.js';
import {get,sum} from '../redux/action.js';
class Second extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum:0
          }
    }
    changenum(e,index){
        if(e.target.innerHTML==='+'){
            store.getState().get[index].num++;
            store.dispatch(get(store.getState().get)) 
            store.getState().get[index].check?this.getprice():null
        }else{
            store.getState().get[index].num--;
            if(store.getState().get[index].num<0){
                store.getState().get[index].num=0;
                store.getState().get[index].show = false;
                store.dispatch(get(store.getState().get))
            }
            store.dispatch(get(store.getState().get))
            store.getState().get[index].check?this.getprice():null
        } 
    }
    change(index){
        store.getState().get[index].check=!store.getState().get[index].check;
        store.dispatch(get(store.getState().get))
    }
    getprice(){
        store.dispatch(sum(store.getState().get))
    }
    render() { 
        return <div className='list'>
        <h4>
            <p>商品名</p>
            <p>商品数量</p>
            <p>商品单价</p>
            <p></p>
        </h4>
            {   
                store.getState().get&&store.getState().get.map((item,index)=>{
                  return  item.num!=0?<div className='total' key={index}>
                        <p><input type='checkbox' checked={item.check} onChange={e=>{this.change(index)}}/>{item.name}</p>
                        <p><span onClick={e=>{this.changenum(e,index)}}>-</span>{item.num}<span onClick={e=>{this.changenum(e,index)}}>+</span></p>
                        <p>{item.price}</p> 
                    </div>:null;    
                })
            }
            <div className="commit">
               <p>您应该支付的金额是:{store.getState().sum&&store.getState().sum}</p>
               <div className="btn">
                 <span>提交按钮</span>
               </div>
            </div>
        </div>
    }
}
 
export default Second;