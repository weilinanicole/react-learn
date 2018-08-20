import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Foot extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='foot'>
        <Link to='/'>首页</Link>
        <Link to='/vip'>vip</Link>
        <Link to='/shop'>shop</Link>
        <Link to='/my'>我的</Link>
    </div>      
    }
}