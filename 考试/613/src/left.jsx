import React from 'react'

import font from './fonts2/iconfont.css'

export default class Left extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='left'>
                    <i className="icon iconfont icon-wode" onClick={()=>{this.props.leftClick()}}></i>
               </div>
    }
}