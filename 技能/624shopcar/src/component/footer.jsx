import React from 'react'

import store from '../store'

export default class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        let num=store.getState().Click.getNum;
        return <div>
            {
                <li style={{marginTop:10}}>数量：<span>{num}</span></li>
            }
        </div>
    }
}