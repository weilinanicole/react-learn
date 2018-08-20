import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios'
export default class Hot extends React.Component{
    constructor(){
        super()
        this.state={
            list:['推荐','动态'],
            data:[]
        }
    }
    componentDidMount(){
       axios.get('/data')
       .then((res)=>{
           this.setState({
               data:res.data.hot
           })
       })
       .catch()
    }
    render(){
        return <div>
            <ul className='attention'>
            {
                this.state.list.map((item,index)=>{
                    return <Link to={`/hot/${index}`} key={index}>{item}</Link>
                })
            }
            </ul>
            <div className="bodyBox">
            {
                this.state.data.map((item,index)=>{
                    return <ol>
                        <li>{item.title}</li>
                        <li>{item.author}</li>
                        <li>{item.img}</li>
                        <li>{item.pri}</li>
                    </ol>
                })
            }
            </div>
        </div>
    }
}