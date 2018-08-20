import React from 'react'

export default class Head extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='head'>
            <li>向左</li>
            <li>每日优鲜</li>
            <li>向右</li>
        </div>
    }
}