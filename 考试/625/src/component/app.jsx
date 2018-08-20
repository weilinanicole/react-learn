import React from 'react'
import Control from './control.jsx'
import Free from './free.jsx'
import Shop from './shop.jsx'
import Pre from './shop/pre.jsx'
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route
} from 'react-router-dom'

export default class App extends React.Component{
    constructor(){
       super()
    }
    render(){
        return <Router>
            <div className='wrap'>
               <div className="left">
                    <NavLink to='/control' activeClassName='active'>控制台</NavLink>
                    <NavLink to='/free'>闲置管理</NavLink>
                    <ul>
                        <NavLink to='/shop'>采购管理</NavLink>
                        <div>
                        <Link to='/shop/pre'>预购管理</Link>
                        <Link to='shop/focus'>预约验看管理</Link>
                        <Link to='/shop/help'>代采委托管理</Link>
                        </div>
                    </ul>
               </div>
               <div className="body">
                    <Route exact path='/' component={Shop}></Route>
                    <Route path='/control' component={Control}></Route>
                    <Route path='/free' component={Free}></Route>
                    <Route path='/shop' component={Shop}></Route>
               </div>
            </div>
        </Router>
    }
}