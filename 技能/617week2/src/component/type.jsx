import React from 'react'

import axios from 'axios'

import Fruit from './type/fruit.jsx'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Type extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            passData:[]
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
            passData:this.state.list[index]
        })
    }
    render(){
        return <div>
        <nav>{
            this.state.list.map((item,index)=>{
                return <Link to={`/type/${index}`} key={index}><li onClick={()=>{this.click(index)}}>{item.firstNav}</li></Link>
            })
        }
        </nav>
        <div className="main">
            <Route path='/type/:id?' render={()=>{return <Fruit pass={this.state.passData}/>}}></Route>
        </div>
    </div>
                
    }
}
