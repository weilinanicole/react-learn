import React from 'react'
import store from '../store'
import {getData,getUser,getPwd} from '../action'
import {
    Link
}
from 'react-router-dom'
export default class Add extends React.Component{
    constructor(){
        super()
    }

    getUser(e){
        store.dispatch(getUser(e.target.value))
    }
    getPwd(e){
        store.dispatch(getPwd(e.target.value))
    }
    submit(arr){
        if(window.localStorage.item){
            let items=JSON.parse(window.localStorage.item);
            for(let i=0;i<items.length;i++){
                arr.push(items[i])
            }
        }
        if(store.getState().getUser.getUser&&store.getState().getPwd.getPwd){
             let obj={};
             obj.user=store.getState().getUser.getUser;
             obj.pwd=store.getState().getPwd.getPwd;
             arr.push(obj)
        }
        window.localStorage.item=JSON.stringify(arr);
        store.dispatch(getData(arr))
        console.log(store.getState().getData.getData)
    }
    render(){
        let user=store.getState().getUser.getUser;
        let pwd=store.getState().getPwd.getPwd;
        let arr=[];
        return <div className='inpBox'>
            <li><input type="text" value={user} placeholder='Username' onChange={(e)=>{this.getUser(e)}}/></li>
            <li><input type="text" value={pwd} placeholder='Password' onChange={(e)=>{this.getPwd(e)}}/></li>
            <Link to='/list' type='button' onClick={()=>{this.submit(arr)}}>add</Link>
        </div>
    }
}