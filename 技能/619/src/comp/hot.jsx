import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import Att from './att.jsx'
import Move from './move.jsx'
export default class Hot extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <nav>
                <Link to='/hot/attention'>关注</Link>
                <Link to='/hot/move'>动态</Link>
            </nav>
            <div className="main">
                <Route path='/hot/attention' component={Att}></Route>
                <Route path='/hot/move' component={Move}></Route>
            </div>
        </div>
    }
}