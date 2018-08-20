import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import Home from './component/home.jsx'
import Login from './component/login.jsx'

import './css/style.css'

import {Fragment} from 'react'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Fragment>
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
            </Fragment>
        </Router>
    </Provider>, document.getElementById('root'))

// （三）案例描述
// 1.根据上图实现乐纯酸奶页面布局（主页，我的）
// 2.模拟列表数据，实现顶部导航切换功能
// 3.点击我的路由切换的时候判断用户登录，如果登录正常跳转到我的页面，如果未登录跳转到登录页面（我的页面不用写布局样式，展示用户信息即可）
// 4.点击商品的加入购物车按钮在购物车中添加该商品数据
// 5.点击购物袋按钮，弹出购物袋中的商品列表，在购物袋中也可对商品进行加减操作
// 6.根据购物袋中的商品计算总支付价格
// （四）评分要求
// 1.合理应用组件创建方式完成组件的开发  10分
// 2.编写列表组件  10分
// 3.合理分配路由  10分
// 4.实现顶部数据切换功能  10分
// 5.所有数据定义在redux中（列表数据，登录数据）  10分
// 6.渲染染列表数据进行列表展示 10分
// 7.实现单个商品添加购物车功能  10分   
// 8.购物车中也可继续操作商品的加减功能，并且计算总价  10分
// 9.实现登录拦截功能  10分
// 10.实现登录功能  10分