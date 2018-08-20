import React from 'react'

export default class My extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        window.sessionStorage('get','true');
        console.log(window.sessionStorage.get)
    }
    render(){
        return <div className='mask'>
            <div className="login"> 
                <li>用户名：<input type="text" placeholder='请输入用户名'/></li>
                <li>用户名：<input type="text" placeholder='请输入密码'/></li>
            </div>
        </div>
    }
}