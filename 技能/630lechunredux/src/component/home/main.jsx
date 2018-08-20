import React from 'react'
import store from '../../store'
import {getData} from '../../action'
export default class Main extends React.Component{
    constructor(){
        super()
    }
    click(index,type){
       let list=store.getState().getData.getData&&store.getState().getData.getData;
       //获取到的是头部导航栏点击的是哪一项
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
        //获取到是点击的头部导航的第几项
        let index=store.getState().getData.getData&&store.getState().getData.getData.navIndex;
        //获取到的是内容区域需要渲染的数据
        let list=store.getState().getData.getData&&store.getState().getData.getData.list[0].navList[index].items
        return <div className='main'>
            {
                list&&list.map((item,index)=>{
                    return <div className="box" key={index}>
                        <img src={item.img} alt=""/>
                        <p>{item.title}</p>
                        <li>{item.pro}</li>
                        <ul>
                            <li>￥<span>{item.price}</span></li>
                            <li><span onClick={()=>{this.click(index,'-')}}>-</span><span>{item.num}</span><span onClick={()=>{this.click(index,'+')}}>+</span></li>
                        </ul>
                    </div>
                })
            }
        </div>
    }
}