import React from 'react';
import { connect } from 'react-redux';
import * as actionType from "../action/actionType";


class Login extends React.Component{
    constructor() {
        super();
    }
    componentDidMount(){

    }
    render() {
        return <main>
            <li><span>用户名</span><input type='text' placeholder='请输入用户名' value={this.props.user} onChange={(e)=>{this.props.getUser(e)}}/></li>
            <li><span>密码</span><input type='password' placeholder='请输入密码' value={this.props.pwd} onChange={(e)=>{this.props.getPwd(e)}}/></li>
            <button onClick={() => { this.props.login(this.props.user, this.props.pwd)}}>登录</button>
        </main>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser:(e)=>{
            console.log(actionType.USER)
            dispatch({
                type:actionType.USER,
                text: e.target.value
            })
        },
        getPwd:(e)=>{
            dispatch({
                type:actionType.PWD,
                text:e.target.value
            })
        },
        login:(user,pwd)=>{
            if(user === 'cmy'&&pwd=== '0816'){
                alert('登录成功');
            window.location.href='/home/mine';
            window.sessionStorage.login='denglu';
            }else{
                alert('用户名和密码错误，请重试');
                dispatch({
                    type: "USER",
                    text: ''
                })
                dispatch({
                    type: "PWD",
                    text: ''
                })
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)