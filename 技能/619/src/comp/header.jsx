import React from 'react'
import {
    Link
} from 'react-router-dom'
export default class Hot extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <header>
                    <ul>
                        <Link to='/home'>首页</Link>
                        <Link to='hot'>沸点</Link>
                        <Link to='page'>小册</Link>
                        <Link to='store'>开源库</Link>
                        <Link to='active'>活动</Link>
                    </ul>
                    <ol>登录注册</ol>
                </header>
    }
}