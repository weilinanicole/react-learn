import React from 'react'


import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import axios from 'axios'

import Two1 from './two1.jsx'

import Two2 from './two2.jsx'

import Two3 from './two3.jsx'


export default class Two extends React.Component{
    componentDidMount(){
        console.log(this.props.location)
        axios.get('/two').then((res)=>{
            console.log(res.data.msg)
        }).catch()
    }
    render(){
        return <Router>
            <div>
                <div>
                    <h1>这是Two页面</h1>
                </div>
                <Link to='/two/two1'>子页面1</Link>
                <Link to='/two/two2'>子页面2</Link>
                <Link to='/two/two3'>子页面3</Link>

                <Route path='/two/two1' component={Two1}></Route>
                <Route path='/two/two2' component={Two2}></Route>
                <Route path='/two/two3' component={Two3}></Route>
            </div>
        </Router>
    }
}