import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Add from './add.jsx'
import List from './list.jsx'
export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <Router>
           <div className="wrap">
                <Route exact path='/' component={Add}></Route>
                <Route path='/add' component={Add}></Route>
                <Route path='/list' component={List}></Route>
           </div>
        </Router>
    }
}