import React from 'react'

import First from './first.jsx'
import Type from './type.jsx'
import Shop from './shop.jsx'
import My from './my.jsx'

import Fruit from './type/fruit.jsx'

import Detail from './detail.jsx'

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <Router>
            <div className='wrap'>
                <header>
                    <li><input type="text" placeholder='请输入您要搜索的内容'/><i className="icon iconfont icon-fangdajing"></i></li>
                    <li><i className="icon iconfont icon-gengduo-2"></i></li>
                </header>
                <div className="body">
                    
                    <Route exact path='/' component={Type}></Route>
                    <Route path='/first' component={First}></Route>
                    <Route path='/type' component={Type}></Route>
                    <Route path='/shop' component={Shop}></Route>
                    <Route path='/my' component={My}></Route>


                    <Route path='/detail' component={Detail}></Route>
                </div>
                <footer>
                    <NavLink to='/first' activeClassName='active'>首页</NavLink>
                    <NavLink to='/type'>全部分类</NavLink>
                    <NavLink to='/shop'>购物车</NavLink>
                    <NavLink to='/my'>我的</NavLink>
                </footer>
                
            </div>
        </Router>
    }
}