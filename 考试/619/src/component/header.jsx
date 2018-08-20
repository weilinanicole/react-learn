import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Hot from './hot.jsx'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
            head:['首页','沸点','小册','开源']
        }
    }
    render(){
        return   <div className="head">
        <img src="/img/logo.png" alt=""/>
            <div>
                <ul>{
                    this.state.head.map((item,index)=>{
                        return <li key={index}>
                            <Link to={`/hot/${index}`} key={index}>{item}</Link>
                        </li>
                    })
                }</ul>
            </div>
        <span>登录&nbsp;&nbsp;注册</span>
        <Route path='/hot/:id' component={Hot}></Route>
    </div>
            
      
    }
}