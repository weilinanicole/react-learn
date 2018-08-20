import React from 'react'
import {Fragment} from 'react'
export default class Login extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='login'>
            <ul className='loginBox'>
                <li><input type="text" placeholder='手机号码'/></li>
                <li><input type="text" placeholder='短信验证'/></li>
                <button type='button' onClick={(e)=>{this.click(e)}}>登录</button>
            </ul>
            
        </div>
    }
}