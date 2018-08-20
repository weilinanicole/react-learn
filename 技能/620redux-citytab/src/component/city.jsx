import React from 'react'

import store from '../store'

export default class City extends React.Component{
    constructor(){
        super()
    }
    render(){
        let city=store.getState().city
        return <div>{
            city.map((item,index)=>{
                return <ul key={index}>
                    <p>{item.country}</p>
                    {
                        item.province.map((val,key)=>{
                            return <li key={key}>{val}</li>
                        })
                    }
                </ul>
            })
        }</div>
    }
}