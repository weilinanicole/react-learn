import React from 'react'

import LoadAble from 'react-loadable'

import {BrowserRouter as Router,Route,Link,Redirect,NavLink,Switch} from 'react-router-dom'


// import One from './one.jsx'
// import Two from './two.jsx'
// import Three from './three.jsx'

const One=LoadAble({
    loader:()=>import('./one.jsx'),
    loading:()=>{return null}
})

const Two=LoadAble({
    loader:()=>import('./two.jsx'),
    loading:()=>{return null}
})

const Three=LoadAble({
    loader:()=>import('./three.jsx'),
    loading:()=>{return null}
})


export default class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <NavLink to='/one/?id=1&pwd=2' activeClassName='active'>one</NavLink>
                    <NavLink to='/two/3'>two</NavLink>
                    <NavLink to={{
                        pathname:'/three',
                        params:{
                            name:'zs',
                            age:18
                        }
                    }}>three</NavLink>
                    
                    <Switch>
                        <Route exact path='/' component={One}/>
                        {/* 可以匹配/one或/one/参数 */}
                        {/* 重定向 */}
                        {/* render={()=>{return <Redirect to='/one'/>}} */}
                        <Route path='/one/:id?' component={One}/>
                        <Route path='/two/:id' component={Two}/>
                        <Route path='/three' component={Three}/>
                    </Switch>
                </div>
            </Router>
        )  
    }
}