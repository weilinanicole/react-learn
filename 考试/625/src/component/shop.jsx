import React from 'react'
import Pre from './shop/pre.jsx'
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route
} from 'react-router-dom'
export default class Shop extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
                <Route path='/shop/pre' component={Pre}></Route>
        </div>
    }
}