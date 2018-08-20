import React from 'react'

import Index from './index.jsx'
import Vip from './vip.jsx'
import Shop from './shop.jsx'
import My from './my.jsx'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class App extends React.Component{
    render(){
        return <Router>
            <div className='wrap'>
                <Route exact path='/' component={Index}></Route>
                <Route path='/index' component={Index}></Route>
                <Route path='/vip' component={Vip}></Route>
                <Route path='/shop' component={Shop}></Route>
                <Route path='/my' component={My}></Route>
                <footer>
                    <Link to='/index'>首页</Link> 
                    <Link to='/vip'>会员</Link> 
                    <Link to='/shop'>购物车</Link> 
                    <Link to='/my'>我的</Link> 
                </footer>
               
            </div>
        </Router>
    }
}