import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Index from './index.jsx'

const def=()=>{
    return <Link to='/color'>visitColor</Link>
}

export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <Router>
                <div>
                    <Route exact path='/' component={def}></Route>
                    <Route path='/color' component={Index}></Route>
                </div>
              </Router>
    }
}