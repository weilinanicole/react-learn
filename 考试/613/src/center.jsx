import React from 'react'

import font from './fonts2/iconfont.css'

export default class Center extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='center' onClick={()=>{this.props.centerClick()}}>
                    <i className="icon iconfont icon-reddit"></i>
                    <span>北京市</span>
                    <i className="icon iconfont icon-angle-down"></i>
                    <ol>
                        {
                            !this.props.showCenter?null:this.props.list.map((item,index)=>{
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ol>
                </div>
    }
}