import React from 'react'

import Login from './login.jsx'

import Home from './home.jsx'

import My from './home/main.jsx'

import {connect} from 'react-redux'


import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        let list=this.props.list.isLogin.isLogin;
        return <div>
             <Route path='/home' component={Home}></Route>
             <Route path='/login' component={Login}></Route>
        </div>
       {/* <div className='wrap'>
            {
                list?<Login/>:<Home/>
            }
        </div> */}
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        list:state
    }
}
const mapDispatchToState = (dispatch,ownProps)=>{
    return {
       
    }
}
export default connect(mapStateToProps,mapDispatchToState)(App)