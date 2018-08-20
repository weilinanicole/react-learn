import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Attention from './index/attention.jsx'
import Commend from './index/commend.jsx'
import Hot from './index/hot.jsx'

export default class Index extends React.Component{
    constructor(){
        super()
        this.state={
            list:['关注','推荐','热榜'],
            current:0,
            attentionData:[]
        }
    }
    click(current){
        this.setState({
            current
        })
    }

    render(){
        return <div className='headBox'>
            <div className='header'>
                {
                    this.state.list.map((item,index)=>{
                        return <Link to={`/index/${index}`} key={index} onClick={()=>{this.click(index)}}>
                                    {item}
                            </Link>
                    })
                }
            </div>
                <div className='body'>
                <Route path='/index/:id' render={()=>{return this.state.current===0?<Attention data={this.state.attentionData}/>:this.state.current===1?<Commend/>:<Hot/>}}/>
                
            </div>
        </div>
    }
}