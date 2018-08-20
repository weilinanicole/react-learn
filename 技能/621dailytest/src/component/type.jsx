import React from 'react'
import store from '../store'
export default class Type extends React.Component{
    constructor(){
        super()
    }
    render(){
        let types=store.getState().type;
        console.log(types)
        return <div>
            {
                types.map((item,index)=>{
                    return <ul>
                        <div className="left">
                            <h2>{item.title}</h2>
                            <li>{item.time}</li>
                            <li>{item.thing}</li>
                        </div>
                        <div className="right">
                            <li>{item.master}</li>
                            <li>{item.tips}</li>
                        </div>
                    </ul>
                })
            }
        </div>
    }
}