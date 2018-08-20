import React from 'react'

import font from './fonts2/iconfont.css'


export default class Right extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='right'>
            <i className="icon iconfont icon-xiaoxi1" onClick={()=>{this.props.rightClick()}}></i>
        </div>
    }
}