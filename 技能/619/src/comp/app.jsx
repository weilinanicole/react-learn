import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Index from './index.jsx'
import Hot from './hot.jsx'
import Head from './header.jsx'
export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <Router>
            <div className="wrap">
                <Head></Head>
                <div className="body">
                    <Route exact path='/' component={Index}></Route>
                    <Route path='/home' component={Index}></Route>
                    <Route path='/hot' component={Hot}></Route>
                </div>
            </div>
        </Router>
    }
}