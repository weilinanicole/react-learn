import React from 'react'
import store from '../store'

export default class Province extends React.Component{
    constructor(){
        super()
    }
    click(index){
        store.dispatch({
            type:'CHANGE_CITY',
            text:this.province[index].item
        })
        store.dispatch({
            type:'CHANGE_INDEX',
            text:index
        })
    }
    render(){
        let province=this.province=store.getState().province.province;
        return <div>
            <div className="left">
                {
                    province.map((item,index)=>{
                        return <li key={index} onClick={()=>{this.click(index)}}>{item.title}</li>
                    })
                }
            </div>
        </div>
    }
}