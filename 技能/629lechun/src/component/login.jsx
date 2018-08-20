import React from 'react'
import { connect } from 'react-redux';
import {isLogin} from '../action'


class Login extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='login'>
            <ul>
                <li><input type="text" placeholder='手机号码'/></li>
                <li><input type="text" placeholder='验证短信'/></li>
            </ul>
            <button type='button' onClick={()=>{this.props.Log()}}>登录</button>
        </div>
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {

    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        Log:()=>dispatch(isLogin(false))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)