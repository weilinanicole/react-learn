import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'

export default class Fruit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:props.location.data.secondNav
        }
        
    }
    render(){
        //console.log(this.props.data)
        // return <div className='body'>
        // <div className='nav'>{
        //     this.state.list.map((item,index)=>{
        //         return <NavLink to='' className='active' key={index}>{item.nav}</NavLink>
        //     })
        // }
        // </div>
        // </div>
        return null
    }
}