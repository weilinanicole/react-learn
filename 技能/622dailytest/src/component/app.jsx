import React from 'react'
import store from '../store'
import axios from 'axios'
import {getData,clickNum,changeIndex} from '../action/index.js' 
export default class App extends React.Component{
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            store.dispatch(getData(res.data.list))
        })
        .catch((err)=>{
            console.log(err)
        })
     }
    click(index){
        store.dispatch({
            type:'CHANGE_INDEX',
            text:index
        })
        let isShow=store.getState().Click.getData;
        isShow[index].isShow=!isShow[index].isShow
        if(isShow[index].isShow){
            isShow[index].path="/img/1.png";
            let num=store.getState().Click.clickNum||0;

            num+=1;
            store.dispatch(clickNum(num))

        }else{
            isShow[index].path="/img/2.png"
            let num=store.getState().Click.clickNum||0;
            num-=1;
            store.dispatch(clickNum(num))
        }
        store.dispatch(getData(isShow))
    }
    render(){
        let data=this.data=store.getState().Click.getData;
        return <div>
        {
            data&&data.map((item,index)=>{
                return <li key={index} onClick={()=>{this.click(index)}}><img src={item.path} alt=""/></li>
            })
        }
        <p>{store.getState().Click.clickNum}</p>
        </div>
    }
}


