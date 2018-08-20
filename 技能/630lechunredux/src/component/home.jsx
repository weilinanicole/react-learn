import React from 'react'
import {Fragment} from 'react'
import store from '../store'
import Header from './home/header.jsx'
import Footer from './home/footer.jsx'
import Main from './home/main.jsx'
import My from './home/my.jsx'
import {Route,Redirect} from 'react-router-dom'
import Login from './login.jsx'


export default class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        let list=this.props.data&&this.props.data;
        let isLogin=store.getState().isLogin.isLogin;

        return <Fragment>
            <Header/>
            <Route path='/home/main' component={Main}></Route>
                {
                    isLogin&&<Redirect to='/login'/>
                }
            <Footer/>
        </Fragment>
    }
}