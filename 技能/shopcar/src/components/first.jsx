import React from 'react';
import {get} from '../redux/action.js'
import store from '../redux/store.js';
import '../fonts/iconfont.css';
class First extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentDidMount(){
        fetch('/data/shopdata.json')
        .then(res=>{
            res.json().then(receive=>{
                store.dispatch(get(receive))
            })
        })
    }
    showShop(index,e){
        store.getState().get[index].show = true;
        store.dispatch(get(store.getState().get))
    }
    changenum(e,index){
        if(e.target.innerHTML==='+'){
            store.getState().get[index].num++;
            store.dispatch(get(store.getState().get)) 
        }else{
            store.getState().get[index].num--;
            if(store.getState().get[index].num<0){
                store.getState().get[index].num=0;
                store.getState().get[index].show = false;
                store.dispatch(get(store.getState().get))
            }
            store.dispatch(get(store.getState().get))
            
        } 
    };
    render() { 
        return <div className='list'>
            {
                store.getState().get&&store.getState().get.map((item,index)=>{
                    return <div className="artical" key={index}>
                            <img src={item.img} alt=""/>
                            <p>{item.name}</p>
                            <span>{item.intro}</span>
                            <h5><b>数量:{item.num}</b>
                            <b>￥{item.price}</b>
                            {
                                item.show?<p className='addshop'><b onClick={e=>{this.changenum(e,index)}}>-</b>
                                <b>{item.num}</b>
                                <b onClick={e=>{this.changenum(e,index)}}>+</b></p>:
                                <span className='iconfont icon-gouwuche' onClick={e=>{this.showShop(index)}}>
                                </span>
                            }
                            </h5>
                    </div>
                })
            }
        </div>
    }
}
 
export default First;