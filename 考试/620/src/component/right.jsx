import React from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Right extends React.Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.setState({
            list:this.props.location.data
        })
    }
    render(){
        console.log(this.props.location.data&&this.props.location.data)
        return <div>{
            this.props.location.data&&this.props.location.data.item.map((item,index)=>{
                return <div key={index} className='box'>
                    <p>{item.country}</p>
                    <ul>{
                        item.province.map((val,key)=>{
                            return <li key={key}>{val}</li>
                        })
                    }</ul>
                </div>
            })
        }</div>
    }
}