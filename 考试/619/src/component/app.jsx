import React from 'react'
import Header from './header.jsx'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Hot from './hot.jsx'
import axios from 'axios'
export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            head:['首页','沸点','小册','开源'],
            list:[]
        }
    }
   
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            this.setState({
                list:res.data.body
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render(){
        return <Router>
            <div className='wrap'>
                 {/* <Header/> */}
                <div className="head">
                <img src="/img/logo.png" alt=""/>
                    <div>
                        <ul>{
                            this.state.head.map((item,index)=>{
                                return <li key={index}>
                                    <Link to={`/hot/${index}`} key={index}>{item}</Link>
                                </li>
                            })
                        }</ul>
                    </div>
                    <span>登录&nbsp;&nbsp;注册</span>
                </div>


                <div className="body">
                    <h6><span>热门文章</span><span>查看更多</span></h6>
                    {
                        this.state.list.map((item,index)=>{
                        return  <ul key={index} className='box'>
                            <p>{item.title}</p>
                            <li><span>{item.type}</span><span>{item.author}</span></li>
                        </ul>
                        })
                    }
                </div>
                <Route path='/hot/:id' component={Hot}></Route>
            </div>
        </Router>
    }
}