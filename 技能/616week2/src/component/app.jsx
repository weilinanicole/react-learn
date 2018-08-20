import React from 'react'

import axios from 'axios'

import Fruit from './fruit.jsx'

import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            body:[]
        }
    }
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            this.setState({
                list:res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    click(index){
        this.setState({
            body:this.state.list[index]
        })
        console.log(this.state.body)
    }
    render(){
        return <Router>
            <div className='wrap'>
                <header>{
                    this.state.list.map((item,index)=>{
                            return <Link to={{
                                pathname:`/fruit/${index}`,
                                data:this.state.list[index]
                            }} key={index}><li onClick={()=>{this.click(index)}}>{item.firstNav}</li></Link>     
                    })
                }
                </header>
                <div className="body">
                    {
                        this.state.body.map((item,index)=>{
                            return <li>{item.secondNav}</li>
                        })
                    }
                </div>
                <Route path='/fruit' component={Fruit}></Route>
            </div>
            
        </Router>
    }
}