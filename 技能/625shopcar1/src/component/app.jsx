import React from 'react'

import Head from './head.jsx'

import Select from './selectAll.jsx'

import Foot from './foot.jsx'

import Index from './router/index.jsx'

import Vip from './router/vip.jsx'

import Shop from './router/shop.jsx'

import My from './router/my.jsx'

import Detail from './detail.jsx'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <Router>
        <div className="wrap">
            {/* head组件 */}
            <Head/>
            <div className='body'>
                <Route exact path='/' component={Index}></Route>
                <Route path='/index' component={Index}></Route>
                <Route path='/vip' component={Vip}></Route>
                <Route path='/shop' component={Shop}></Route>
                <Route path='/my' component={My}></Route>
                {/* 详情页 */}
               <Route path='/detail/:id' component={Detail}></Route>
            </div>
            {/* 总全选组件 */}
            <Select/>
            {/* footer组件 */}
            <Foot/>
        </div>
        
    </Router>
    }
}