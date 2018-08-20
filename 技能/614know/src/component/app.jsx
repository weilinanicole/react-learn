import React from 'react'

import Detail from './detail.jsx'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import Index from './index.jsx'
import Think from './think.jsx'
import College from './college.jsx'
import News from './news.jsx'
import My from './my.jsx'

export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <Router>
        <div className='wrap'>
            <div className='main'>
                <Route exact path='/' render={()=>{return <Redirect to='/index/0'/>}}></Route>
                <Route path='/index/0' component={Index}></Route>
                <Route path='/think' component={Think}></Route>
                <Route path='/college' component={College}></Route>
                <Route path='/news' component={News}></Route>
                <Route path='/my' component={My}></Route>

                <Route path='/detail' component={Detail}></Route>
            </div>
            <footer>
                <Link to='/index/0'>首页</Link>
                <Link to='/think'>想法</Link>
                <Link to='/college'>大学</Link>
                <Link to='/news'>消息</Link>
                <Link to='/my'>我的</Link>
            </footer>
        </div>
        </Router>
       
    }
}
