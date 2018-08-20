import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
}from 'react-router-dom'
import {getData} from '../action'
import store from '../store'
import axios from 'axios'
import Home from './home.jsx'
import Login from './login.jsx'
import Main from './home/main.jsx'
export default class App extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5b0be9c51725f034fca4cc0f/example/lechun')
        .then((res)=>{
            store.dispatch(getData(res.data))
        })
    }
    render(){
        let list=store.getState().getData.getData&&store.getState().getData.getData;
        let storage=window.sessionStorage.getItem('store');
        return <Router>
            <div className='wrap'>
                <Route exact path='/' render={()=>{return <Redirect to='/home/main'/>}}></Route>
                <Switch>
                    <Route path='/home' render={()=>{return <Home data={list}/>}}></Route>
                    <Route path='/login' component={Login}></Route>
                </Switch> 
            </div>
        </Router>
    }
}